import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');
const port = process.env.PORT || 8080;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "frame-ancestors 'none'"
};

const server = http.createServer(function (req, res) {
  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);

  if (!filePath.startsWith(distPath)) {
    res.writeHead(403, securityHeaders);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, function (error, content) {
    if (error) {
      fs.readFile(path.join(distPath, 'index.html'), function (fallbackError, fallbackContent) {
        if (fallbackError) {
          res.writeHead(500, securityHeaders);
          res.end('Could not load index.html');
          return;
        }

        res.writeHead(200, { ...securityHeaders, 'Content-Type': 'text/html' });
        res.end(fallbackContent);
      });

      return;
    }

    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    res.writeHead(200, { ...securityHeaders, 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(port, function () {
  console.log('Server running on port ' + port);
});