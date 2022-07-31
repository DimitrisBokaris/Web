//Based on https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log('req ', req.url)

    let filePath = '.' + req.url
    //server .index.html by default
    if (filePath == './') {
        filePath = './' + 'todo.html'
    }

    let extname = String(path.extname(filePath)).toLowerCase()
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream'

    if(filePath==".readTODOs"){
        res.setHeader(200,{'Content-Type': contentType})
        res.end("my todos are done", 'utf-8')
        
    }
    else{
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile('./404.html', (err, data) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' })
                    res.end(data, 'utf-8')
                });
            }
            else {
                res.writeHead(500)
                res.end('Error 500: ' + err.code)
            }
        }
        else {
            res.setHeader('Cache-Control', 'no-store')
            res.writeHead(202, { 'Content-Type': contentType })
            res.end(data, 'utf-8')
        }
    });
    }

})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
