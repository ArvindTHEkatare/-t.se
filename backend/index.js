    //alla moduler som kommer användas
    import express from 'express';
    import { fileURLToPath } from 'url';
    import path from 'path';
    import bodyParser from 'body-parser';
    import pg from 'pg';
    import bcrypt from 'bcrypt';
    import nodemailer from 'nodemailer';
    import dotenv from 'dotenv';
    import fs from 'fs';

    //anslutning till dotenv
    dotenv.config();
    //sparar app, port, db som variabler
    const app = express();
    const port = 3000;
    const db = new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'onlinematleverans',
        password: '',
        port: 5432,
    });

    //sparar filename och dirname, använder url, path
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    //olika "apps" som används:
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

    //för produkt.html sidan:
    app.get('/produkt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'produkt.html'));
    });
    //för kundvagn.html sidan:
    app.get('/kundvagn', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kundvagn.html'));
    });
    //för confirmationn.html sidan:
    app.get('/confirmation', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
    });
    

    app.use(express.static(path.join(__dirname, 'public')));

    //post for /login delen
    app.post('/login', async (req, res) => {
        //sparar email och password då, från email och password respektiv fält
        const { email, password } = req.body;
        //en try catch, bra för just den här delen
        try {
            //sparar resultat för 'SELECT * FROM users WHERE email = $1' query från databasen (pgadmin4) 
            const result = await db.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );
            //om längden är lika med 0, det är antigen fel e post eller lösenord så returnera det.
            if (result.rows.length === 0) {
                return res.send('Fel e-post eller lösenord.');
            } 
            //sparar användare, och det är index 0 för result då dvs första elementet
            const användare = result.rows[0];  
            //använder bcrypt (säkrare omt hackers och jamför password som finns i databsen och lösenord som använder anger. om de liknar så det är sant)
            const likna = await bcrypt.compare(password, användare.password);

            //om de liknar, inloggning lyckades.
            if (likna) {
                res.send('Inloggning lyckades!');
            //annars failade/ misslyckadesinloggning 
            } else {
                res.send('Fel e-post eller lösenord.');
            }
            //om det är något oförväntat som tar plats, catch errorn.
        } catch (err) {
            console.error(err);
            res.status(500).send('Serverfel');
        }
    });

    // det här gäller för register.html
    app.post('/register', async (req, res) => {
        //som tidigare, spara email och password som variabler (spara det som användaren matar in)
        const { email, password } = req.body;

        //en try catch, bra att använda i den här sammanhang.
        try {
            //spara hashade llösenoredet, 10 saltrounds
            const hashedPassword = await bcrypt.hash(password, 10);
            //nu, sparar vi emailen och lösenored (mer specifiikt hashade varianten av lösenord för att kunna stoppa missbrukare) i databasen.
            const result = await db.query(
                'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
                [email, hashedPassword]
            );
            //om registrering lyckades, medela användaren
            console.log('Registrerad användare:', result.rows[0]);
            res.send('Registrering lyckades!');
            //catch en förväntat error. 
        } catch (err) {
            console.error('Fel vid registrering:', err);
            res.status(500).send('Serverfel vid registrering');
        }
    });
    // det här gäller för submit-order.html (efter man godkänner köpet)
    app.post('/submit-order', async (req, res) => {
        //spara, userid, det som finns i kundvagn, förnamn efternamn nummer och mejlen
        const { user_id, cartItems, first_name, last_name, phone_number, email } = req.body;
        //try catch
        try {
            //en loop/iteration, för items of carItems
            for (const item of cartItems) {
                //tilläga de värderna som fås på kundvagn.html
                await db.query(
                    `INSERT INTO orders (user_id, meal_id, quantity, first_name, last_name, phone_number, email) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                    [user_id, item.id, item.quantity, first_name, last_name, phone_number, email]
                );
            }
            //det här är för mejl (order bekräftelse). använder nodemailer. tjänsten är en gmail och eat.sekedja@gmail.com skickar mejl till användaren
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'eat.sekedja@gmail.com',
                    pass: 'xwdhqkzczaykbcsg',
                },
            });
            //dubbel kolla om mejlen stämmer i console
            console.log('mejlen av användaren:', email);
            //kommer välja en av de 5 slumpmässiga gifs 
            const gifs = [
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHRtejdtazkzaGE0dHp5cW8zNHZ2bWZvN2Uzb3NuNWU1d3M0bXZmOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kigfYxdEa5s1ziA2h1/giphy.gif",
                "https://media.giphy.com/media/rq7jBVIjy6Kw35PAEi/giphy.gif?cid=ecf05e47jm6rqy4eut2gwf81nwnxyoog6xmjbd7ae84srkml&ep=v1_gifs_search&rid=giphy.gif&ct=g",
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhxaTQ3YXJpNnE3ZHVkb3JhdjRnaXBxbjYwZGNyeThycXhndGdqcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1pXpvCZWiU5MCjKeN3/giphy.gif",
                "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhxaTQ3YXJpNnE3ZHVkb3JhdjRnaXBxbjYwZGNyeThycXhndGdqcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MXvc8qsT1uRfpLuow7/giphy.gif",
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDlsNmUxeXNtNHhmNTk0c2M2emZnb3ZndTA0aGV0YzY1bTg4bzk4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KxD1TBbchjbxZJHoYW/giphy.gif"
            ];
            //matte delen, precis som submit-order.html
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            //sparar mailOptions, den består av vem som skickar (ät.se då ) till användaren/ kundan, subject och sen brödtext
            const mailOptions = {
                from: 'eat.sekedja@gmail.com',
                to: email,
                subject: 'Din order beställning från ät.se',
                html: `
                    <h1>Din beställning har genomförts!</h1>
                    <p>Tack för att du handlar hos ät.se. Vid eventuella frågor mejla gärna oss på eat.sekedja@gmail.com. Smaklig måltid!</p>
                    <img src="${randomGif}" alt="Thumbs Up" width="200"/>
                `,
            };
    
            //skickar mejlen, då, om en error tar plats, informera användaren o
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error); 
                    res.status(500).send("Fel vid mejlskickning");
                } else {
                    console.log('Email sent:', info.response); 
                    res.redirect('/submit-order.html'); 
                }
            });
         
    // om något annat oförväntat dyker upp , catch error
        } catch (err) {
            console.log('Error vid skickandet av emailen. Dubbel kolla allt info!:', err);
       
        }
    });

    //GET-metoden används för att hämta data från servern. Detta är en skrivskyddad metod, så den har ingen risk att mutera eller korrumpera data.
    app.get('/api/meals', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from mcdonalds i det här fall då 
            const result = await db.query('SELECT * FROM meals_mcdonalds');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });
    //POST-metoden skickar data till servern.
    app.post('/api/meals', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_mcdonalds (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
                [name, description, price, image_path]
            );
            //status skickandet
            res.status(201).json(result.rows[0]);  
            //vid eventuella fel:
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid implementering av maträtten');
        }
    });
    
    //DELETE-metoden används för att ta bort en resurs.
    app.delete('/api/meals/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_mcdonalds WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });
    //app listen, vilken port visa i console.log
    app.listen(port, () => {
        console.log(`Lyssnar på port ${port}`);
    });
