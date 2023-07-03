
const fs = require('fs');

const requesthandler = (req, res) => {
    const url = req.url
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.text', { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                res.write('<html>');
                res.write('<head></title>Enter message</title><head>');
                res.write('<br>')
                res.write(`<body>${data}</body>`)
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                res.write('</html>');
                return res.end();
            }
        })
    }
    else if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.text', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    };
}

module.exports = requesthandler;

// exports.handler=requesthandler;
// exports.sometext="some text ";

// module.exports={
//     handler:requesthandler,
//     someText: 'some text'
// }

// module.exports.handler=requesthandler;
// module.exports.sometext='some text'

