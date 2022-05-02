const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');

router.get('/users', async (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT * FROM User`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

router.post('/addUser', async (req, res) => {
    const email = req.body.userInput;
    const password = 1; 

    pool.getConnection( (err, conn) => {
        if (err) throw err;
        const qry = `INSERT INTO WebsiteTest.User(email, password) VALUES(?,?)`;
        conn.query(qry, [email, password], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('User added!');
        });

        res.redirect('/users');
        res.end();
    });
});

module.exports = router;








