const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



router.post('/',  (req, res) => {
  let newSubmission = req.body;
  console.log(`Adding submission`, newSubmission);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [newSubmission.feeling, newSubmission.understanding, newSubmission.support, newSubmission.comments])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new book`, error);
      res.sendStatus(500);
    });
});




module.exports = router;