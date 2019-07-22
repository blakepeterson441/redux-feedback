const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/api/form', (req, res) => {
    console.log('in /feedback POST:', req.body);
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    const values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(query, values).then((response) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('ERROR with INSERT:', err);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});