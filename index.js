const express = require('express');
const app = express();
const { Pool } = require('pg');

const port = 80;
const pool = new Pool({
    host: "development-databasestack-db1de0c8f27-t4ng8tgy3eu5.ct8uc8q0qdtq.eu-west-1.rds.amazonaws.com",
    port: 5432,
    user: "postgres",
    password: "8CHLxj2ki6jwk6LD",
    database: "verxdevdb",
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
        const html = `<html><body><h1>Hello from Service 1</h1><p>Current Time from DB: ${result.rows[0].now}</p></body></html>`;
        res.end(html);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to the database');
    }
});

app.listen(port, () => console.log(`Hello world app started & listening on port ${port}!`));

module.exports = app;