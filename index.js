const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()    
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const html = '<html><body><h1>Hello World App</h1></body></html>';
    res.end(html);
});
app.listen(port, () => console.log(`Hello world app started & listening on port ${port}!`))

module.exports = app;
