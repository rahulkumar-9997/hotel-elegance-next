// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // Serve static files from /assets directly
    if (pathname.startsWith('/assets/')) {
      const filePath = path.join(process.cwd(), 'public', pathname)
      
      // Check if file exists in public/assets
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath)
        const contentType = {
          '.css': 'text/css',
          '.js': 'application/javascript',
          '.jpg': 'image/jpeg',
          '.png': 'image/png',
          '.svg': 'image/svg+xml',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
        }[ext] || 'text/plain'

        res.writeHead(200, { 'Content-Type': contentType })
        fs.createReadStream(filePath).pipe(res)
        return
      }
    }

    // Let Next.js handle all other routes
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})