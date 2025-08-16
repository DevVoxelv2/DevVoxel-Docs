const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs').promises;
const { exec } = require('child_process');

const owner = process.env.GITHUB_OWNER || 'DevVoxelv2';
const repo = process.env.GITHUB_REPO || 'DevVoxel-Docs';
const branch = process.env.GITHUB_BRANCH || 'main';
const port = process.env.PORT || 3000;
const updateInterval = Number(process.env.UPDATE_INTERVAL_MS) || 5 * 60 * 1000;

async function fetchMarkdown(pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '') || 'README';
  const candidates = [
    `${clean}.md`,
    path.join(clean, `${path.basename(clean)}.md`)
  ];

  for (const file of candidates) {
    try {
      const fullPath = path.join(__dirname, file);
      return await fs.readFile(fullPath, 'utf8');
    } catch {}
  }
  throw new Error('File not found');
}

function updateRepo() {
  exec('git pull', { cwd: __dirname }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Auto-update failed: ${stderr || err.message}`);
    } else if (stdout.trim()) {
      console.log(`Repository updated:\n${stdout.trim()}`);
    }
  });
}

if (!process.argv.includes('--test')) {
  updateRepo();
  setInterval(updateRepo, updateInterval);
}

async function renderHTML(md, sidebarMd) {
  try {
    const templatePath = path.join(__dirname, 'template.html');
    let template = await fs.readFile(templatePath, 'utf8');
    
    // Replace placeholders
    template = template.replace(/\{\{owner\}\}/g, owner);
    template = template.replace(/\{\{repo\}\}/g, repo);
    template = template.replace('{{contentMD}}', JSON.stringify(md));
    template = template.replace('{{sidebarMD}}', JSON.stringify(sidebarMd));
    
    return template;
  } catch (error) {
    // Fallback to original template if file doesn't exist
    return `<!doctype html><html><head><meta charset="utf-8"><title>Docs</title><style>body{margin:0;font-family:sans-serif;}nav{background:#333;color:#fff;padding:10px;}nav a{color:#fff;margin-right:10px;text-decoration:none;}#main{display:flex;}#sidebar{width:200px;padding:10px;background:#f0f0f0;}#content{flex:1;padding:10px;}</style></head><body><nav><a href="/">Home</a><a href="https://github.com/${owner}/${repo}" target="_blank">GitHub</a></nav><div id="main"><div id="sidebar"></div><div id="content"></div></div><script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script><script>const contentMD=${JSON.stringify(md)};const sidebarMD=${JSON.stringify(sidebarMd)};document.getElementById('content').innerHTML=marked.parse(contentMD);document.getElementById('sidebar').innerHTML=marked.parse(sidebarMD);</script></body></html>`;
  }
}

if (process.argv.includes('--test')) {
  Promise.all([fetchMarkdown('/'), fetchMarkdown('/sidebar')])
    .then(([md]) => {
      console.log(md.split('\n')[0] || 'empty file');
    })
    .catch(err => {
      console.error(err.message);
      process.exit(1);
    });
  return;
}

const server = http.createServer(async (req, res) => {
    try {
      const pathname = url.parse(req.url).pathname;
      const [md, sidebarMd] = await Promise.all([
        fetchMarkdown(pathname),
        fetchMarkdown('/sidebar')
      ]);
      const html = await renderHTML(md, sidebarMd);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Document not found');
    }
  });

server.listen(port, () => {
  console.log(`Docs server running on http://localhost:${port}`);
});
