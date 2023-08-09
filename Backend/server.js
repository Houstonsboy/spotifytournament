const { createPool } = require('mysql2');
const express = require('express');

const app = express();

const databaseConfiguration = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#Gift@90210!",
    database: "internationalartists",
    connectionLimit: 10
}

const connectionpool = createPool(databaseConfiguration);

connectionpool.query(`select * from artistprofiles where Artists_id=?`,[1], (err, results, fields) => {
    if (err) {
        return console.log("error in connection ", err.message);
    }
    console.log(results);
});





app.post('/updateVote', (req, res) => {
    const album = req.body.album;
    const updateQuery = `UPDATE artistprofiles SET Votes = Votes + 1 WHERE Album = ?`;

    connectionpool.query(updateQuery, [album], (err, results, fields) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: 'Vote count updated successfully.' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
