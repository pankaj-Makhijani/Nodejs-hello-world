const express = require('express');
const app = express();
require('dotenv').config(".env");
const port = 80;
<<<<<<< HEAD
=======
const pool = new Pool({
    host: "development-databasestack-db102d879c3-tc4fcgfty1pd.ct8uc8q0qdtq.eu-west-1.rds.amazonaws.com",
    port: 5432,
    user: "postgres",
    password: "EFTisg5fZMwr24H7",
    database: "verifycleandevdb",
    ssl: {
        rejectUnauthorized: false
    }
});
>>>>>>> 85dfaa78ca116fdb010a4ff5131af2df58218608

app.get('/', async (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
<<<<<<< HEAD
        const html = `<html><body><h1>Hello from Service 1</h1></body></html>`;
=======
        const html = `<html><body><h1>Hello (updated-code) from Service 1</h1><p>Current Time from DB: ${result.rows[0].now}</p></body></html>`;
>>>>>>> 85dfaa78ca116fdb010a4ff5131af2df58218608
        res.end(html);
});

app.listen(port, () => console.log(`Hello world app started & listening on port ${port}!`));

module.exports = app;
