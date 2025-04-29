import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'guestbook',
    password: '12345',
    port: 5432,
})

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Lyssnar på port ${port}');
});
