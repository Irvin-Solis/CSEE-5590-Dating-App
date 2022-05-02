const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
require('dotenv/config');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

const pool =  require('./config/db.js');


    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT * FROM User`;
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                console.log(result);
            });
        } catch (err) {
            console.log(err);
        }
    });

const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});