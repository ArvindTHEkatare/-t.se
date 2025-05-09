import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'onlinematleverans',
    password: '12345',
    port: 5432,
})

app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {

        const result = await db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.send('Fel e-post eller lösenord.');
        }

        const user = result.rows[0];


        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.send('Inloggning lyckades!');
        } else {
            res.send('Fel e-post eller lösenord.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Serverfel');
    }
});


app.listen(port, () => {
    console.log(`Lyssnar på port ${port}`);
    ;
})

