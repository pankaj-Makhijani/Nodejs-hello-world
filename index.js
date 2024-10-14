const express = require('express');
const app = express();
require('dotenv').config(".env");
const port = 80;

app.get('/', async (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const html = `<html><body><h1>Hello from Service 1</h1></body></html>`;
        res.end(html);
});

app.listen(port, () => console.log(`Hello world app started & listening on port ${port}!`));

module.exports = app;