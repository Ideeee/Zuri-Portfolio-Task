const fs = require('fs');
const http = require('http');
const path = require('path');


const port = 2050;
const hostname = 'localhost';

const server = http.createServer((req,res) => {
    let htmlFile = '';
    switch(req.url) {
        case '/':
            htmlFile = 'home.html';
            break;
        case '/about':
            htmlFile = 'about.html';
            break;
        case '/contact':
            htmlFile = 'contact.html';
            break;
        case '/home':
            htmlFile = 'home.html';
            break;
        default:
            break;
    }
    
    if(!htmlFile) {
        res.statusCode = 404;
        res.end('Page Not Found!')
    }

    render(res, htmlFile);
})



const render = (res, htmlFile) => {
    let filePath = path.join(__dirname, htmlFile);
    fs.readFile(filePath, 'utf8', (err, content) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    })
}



server.listen(2050, 'localhost', () => {
    console.log(`Server is running at https://${hostname}:${port}`);
});



