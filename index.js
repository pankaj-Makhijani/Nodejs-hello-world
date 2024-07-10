const express = require('express');
const app = express();
const { Pool } = require('pg');

const port = 80;
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

// Test the database connection when the server starts
pool.connect()
    .then(client => {
        console.log('Successfully connected to the database');
        client.release();
    })
    .catch(err => {
        console.error('Error connecting to the database', err.stack);
        process.exit(1); // Exit the process if the connection fails
    });

app.get('/service1', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        client.release();
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        const html = `<html><body><h1>Hello (updated code) from Service 1</h1><p>Current Time from DB: ${result.rows[0].now}</p></body></html>`;
        res.end(html);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to the database');
    }
});

app.listen(port, () => console.log(`Hello world app started & listening on port ${port}!`));

module.exports = app;
