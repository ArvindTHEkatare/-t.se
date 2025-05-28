    //alla moduler som kommer användas
    import express from 'express';
    import { fileURLToPath } from 'url';
    import path from 'path';
    import bodyParser from 'body-parser';
    import pg from 'pg';
    import bcrypt from 'bcrypt';
    import nodemailer from 'nodemailer';
    import dotenv from 'dotenv';
    import nodeFetch from 'node-fetch';
    import session from 'express-session';
    import cookieSession from 'cookie-session';
    import fs from 'fs';


  
    //anslutning till dotenv
    dotenv.config();
    //sparar app, port, db som variabler
    const app = express();
    const port = 3000;
    const db = new pg.Pool({
        user: 'onlinematleverans_user',
        host: 'dpg-d0reccripnbc73b5k4ag-a',
        database: 'onlinematleverans',
        password: 'hQkY7lZR2ui2rf5ZrVOwoqs8yRdkzGME',
        port: 5432,
        ssl: { rejectUnauthorized: false }
    });

    //sparar filename och dirname, använder url, path och det är egentligen moduler
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    //olika "apps" som används och de används på olika sätt.
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    

    app.use(session({
        secret: 'x49jF2!kLmZ@Q91sVu7dP3rE',
        resave: false,
        saveUninitialized: false
      }));

    app.use(express.static('public'));

    //den här function används inte riktigt men finns ändå-
function requireAdmin(req, res, next) {
    if (!req.session.email || !req.session.is_admin) {
      return res.status(403).send('Du är inte behörig för det här!');
    }
    next();
  }

  //det här är för middle were. Endast specifika emails (t.ex admin för burgerking kan endast vara admin för burgerking och inte andra tjänster.)
  function requireSpecificAdmin(allowedEmail) {

    return (req, res, next) => {
      //om de är behörig,  och admin samtidigt. är de godkänt  
      if (req.session.email === allowedEmail && req.session.is_admin) {
        next();
      } else {//om adminen är inte authoriserade dvs behörig för den här innehållet, visa det här text.
        res.status(403).send('Inte authoriserade för innehållet ');
      }
    };
  }
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_mcdonalds.html', requireSpecificAdmin('press@us.mcd.com'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_mcdonalds.html'));
  });
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_burgerking.html', requireSpecificAdmin('mediainquiries@whopper.com'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_burgerking.html'));
  });
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_sannegardens.html', requireSpecificAdmin('sannegardens@sannegardens.se'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_sannegardens.html'));
  });
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_pizzahut.html', requireSpecificAdmin('HutCares@yum.com'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_pizzahut.html'));
  });
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_max.html', requireSpecificAdmin('info@max.se'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_max.html'));
  });
  //admin panels ligger i admin_pages så vi fixar routing. (och anropar även requirespecifktadmin här. för specifika admins har tillgång till specifika filer.)
  app.get('/admin_thaimat.html', requireSpecificAdmin('chabathaifood@thaimat.se'), (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_pages', 'admin_thaimat.html'));
  });

  //behöver inte filändelse .html längre pga av kod nedan:
  //för produkt.html sidan: (som ligger i public filen)
    app.get('/mcdonaldsMeny', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mcdonaldsMeny.html'));
    });

    app.get('/index', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });
    

    app.get('/burgerKingMeny', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'burgerKingMeny.html'));
    });

    app.get('/sannegardensMeny', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'sånnegardensMeny.html'));
    });

    app.get('/maxMeny', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'maxMeny.html'));
    });

    //för kundvagn.html sidan:
    app.get('/kundvagn', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kundvagn.html'));
    });


    app.get('/thaimat', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'thaimatMeny.html'));
        });
    
        
    app.get('/pizzahutMeny', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'pizzahutMeny.html'));
        });
    

    //för confirmationn.html sidan:
    app.get('/confirmation', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
    });
    
    // app.get('/login', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'login.html'));
    // });
    
    // app.get('/register', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public', 'register.html'));
    // });
    //post för login.
    app.post('/login', async (req, res) => {
        //try catch för att hantera eventuella fel
        try {
         //sparar, mejlen password, captcha svar, och tocken från bodyn.
          const { email, password, 'g-recaptcha-response': captchaToken } = req.body;
          //om användaren har inte svarat på captcha
          if (!captchaToken) {
            return res.status(400).send('CAPTCHA krävs.');
          }
          //secret key för captcha
          const secret = '6LfDkEkrAAAAAJ71JRgNI9nE_Jk-9VCheMhkjFBJ';
          //captcha svar spraras, använder nodefetch.
          const captchaRes = await nodeFetch('https://www.google.com/recaptcha/api/siteverify', {
            //methoden är post, 
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secret}&response=${captchaToken}`
          });
          //spararar captchadatan (omvandlar från json)
          const captchaData = await captchaRes.json();
          //om captcha failades. (inte godkänt) låt användaren veta det här.
          if (!captchaData.success) {
            return res.status(400).send('CAPTCHA-verifiering misslyckades.');
          }
      
          // sprar resultat från db för query. för mejlen.
          const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
          
          //om användaren anger fel epost eller lösenord
          if (result.rows.length === 0) {
            return res.status(401).send('Fel e-post eller lösenord.');
          }
         //sparar nuvarande user.
          const user = result.rows[0];
          //jamför hashade password med vanliga password. och sparar antigen true eller falskt (om de liknar sig eller ine)
          const match = await bcrypt.compare(password, user.password);
          //om de liknar sig, 
          if (match) {
            //sparar session mejlen och om de är admin och visar det i consolen.
            req.session.email = user.email;
            req.session.is_admin = user.is_admin;
            console.log(req.session.email, req.session.is_admin)
            //om user är admin (true) då 
            if (user.is_admin) {
              //för specifika filer har de åtkomst (burger king för admin_burgerking osv)
              if (email === 'press@us.mcd.com') {
                return res.json({ redirect: '/admin_mcdonalds.html' });
              } else if (email === 'mediainquiries@whopper.com') {
                return res.json({ redirect: '/admin_burgerking.html' });
              } else if (email === 'sannegardens@sannegardens.se') {
                return res.json({ redirect: '/admin_sannegardens.html' });
              } else if (email === 'HutCares@yum.com') {
                return res.json({ redirect: '/admin_pizzahut.html' });
              } else if (email === 'info@max.se') {
                return res.json({ redirect: '/admin_max.html' });
              } else if (email === 'chabathaifood@thaimat.se') {
                return res.json({ redirect: '/admin_thaimat.html' });
              } 
              //annars är de inte admin alls (vanliga users) riderekt till galleri.html
            } else {
              return res.json({ redirect: '/galleri.html' });
            }
          }
          //vid eventuella fel, catch och visa felen
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
            //om registrering lyckades, redirect till login
            console.log('Registrerad användare:', result.rows[0]);
            //visa det med ett alert och riderekt till logins ida
            res.send(`
                <script>
                  alert("Dina uppgifter har registrerats! Logga gärna in.");
                  window.location.href = "/login.html";
                </script>
              `);
              
            //catch en förväntat error. 
        } catch (err) {
            console.error('Fel vid registrering:', err);
            res.status(500).send('Serverfel vid registrering');
        }
    });
    // det här gäller för submit-order.html (efter man godkänner köpet)
    app.post("/submit-order", async (req, res) => {   
        //sparar, first name last name telefon nummer email och även order datum från bodyn.
        const { first_name, last_name, phone_number, email, orderDate  } = req.body;
        //sparar cart items (som kommer visas på mejlen)
        const cartItems = Array.isArray(req.body.cartItems) ? req.body.cartItems : [];
        //logiken för total pris, som vi kommer visa på mejlen
        const totalPrice = cartItems.reduce((sum, item) => {
            //returnera väl antalet av varan * varans pris
            return sum + item.quantity * item.price;
          }, 0);
          
          //visa i consolen, vilken användare
          console.log("Mottagen order:", req.body);
        //använder sig av nodemailer modulen
        const transporter = nodemailer.createTransport({
          //gmail, och lösenordet för 2FA (pass)
          service: "gmail",
          auth: {
            user: "eat.sekedja@gmail.com",
            pass: "xwdhqkzczaykbcsg"
          }
        });
        //array av 5 olika gifs
        const gifs = [
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHRtejdtazkzaGE0dHp5cW8zNHZ2bWZvN2Uzb3NuNWU1d3M0bXZmOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kigfYxdEa5s1ziA2h1/giphy.gif",   // GIF 1
            "https://media.giphy.com/media/rq7jBVIjy6Kw35PAEi/giphy.gif?cid=ecf05e47jm6rqy4eut2gwf81nwnxyoog6xmjbd7ae84srkml&ep=v1_gifs_search&rid=giphy.gif&ct=g", // GIF 2
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhxaTQ3YXJpNnE3ZHVkb3JhdjRnaXBxbjYwZGNyeThycXhndGdqcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1pXpvCZWiU5MCjKeN3/giphy.gif", // GIF 3
            "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXhxaTQ3YXJpNnE3ZHVkb3JhdjRnaXBxbjYwZGNyeThycXhndGdqcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MXvc8qsT1uRfpLuow7/giphy.gif", // GIF 4
            "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDlsNmUxeXNtNHhmNTk0c2M2emZnb3ZndTA0aGV0YzY1bTg4bzk4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KxD1TBbchjbxZJHoYW/giphy.gif"    // GIF 5
        ];
        // välj en random gif med hjälp av Math. och spara den då.
        const slumpmässigGif = gifs[Math.floor(Math.random() * gifs.length)];
        //mejl options, från eat.sekedja mejlen till email (som användaren har angivit)
        //kommer på en subject och en body för mejlen.
        const mailOptions = {
            from: "eat.sekedja@gmail.com",
            to: email,
            subject: "Beställning från ät.se!",
            //html, allt det här kommer finnas på mejlen
            html: `
              <!DOCTYPE html>
              <html lang="sv">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bekräftelse - ät.se</title>
                <style>
                  body { font-family: Arial, sans-serif;
                   padding: 20px;
                   color: #333;
                   background-color: #00D4FF;
                   }
                  h1 { color: #2a9d8f; }
                  p { font-size: 16px; }
                  .items { margin-top: 20px; }
                  .item { margin-bottom: 8px; }
                  .footer { margin-top: 30px; font-size: 14px; color: #666; }
                  img { width: 200px; margin-top: 20px; }
                </style>
              </head>
              <body>
                <h1>Hej ${first_name} ${last_name},</h1>
                <p><strong>Orderdatum:</strong> ${orderDate}</p>
                <p>Tack för din beställning!</p>
          
                <div class="items">
                  ${cartItems.map(item => 
                    `<div class="item">${item.quantity} x ${item.name} (${item.price} kr)</div>`
                  ).join('')}
                </div>
                <p><strong>Totalt pris:</strong> ${totalPrice} kr</p>

                <p>Vid eventuella frågor kommer vi nå dig med: ${phone_number}</p>
          
                   <img src="${slumpmässigGif}" alt="Thumbs Up" />
                <p class="footer">Tack för att du handlar hos ät.se! Smaklig måltid!</p>
              </body>
              </html>
            `
          };
          
        //try catch. försök att skicka mejlen
        try {
          await transporter.sendMail(mailOptions);
          res.status(200).send("Email skickades");
          //om det gick inte, visa gärna varför (med hjälp av error)
        } catch (error) {
          console.error(error);
          res.status(500).send("Email failades att skicka");
        }
      });
      
    //GET-metoden används för att hämta data från servern. Detta är en skrivskyddad metod, så den har ingen risk att mutera eller korrumpera data.
    app.get('/api/mcdonaldsMeals', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from mcdonalds i det här fall då 
            const result = await db.query('SELECT * FROM meals_mcdonalds');
            res.json(result.rows);  
            //vid eventuella fek
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });
    //POST-metoden skickar data till servern.
    app.post('/api/mcdonaldsMeals', async (req, res) => {
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
    app.delete('/api/mcdonaldsMeals/:id', async (req, res) => {
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

    app.get('/api/burgerKingMeals', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from meals i det här fall då 
            const result = await db.query('SELECT * FROM meals_burgerking');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });

    app.post('/api/burgerKingMeals', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_burgerking (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
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

    app.delete('/api/burgerKingMeals/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_burgerking WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });
    
    app.get('/api/sannegardensMeny', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from meals i det här fall då 
            const result = await db.query('SELECT * FROM meals_sannegardens');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });

    app.post('/api/sannegardensMeny', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_sannegardens (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
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

    app.delete('/api/sannegardensMeny/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_sannegardens WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });

    app.get('/api/maxMeny', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from meals i det här fall då 
            const result = await db.query('SELECT * FROM meals_max');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });
    
    app.post('/api/maxMeny', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_max (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
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

    app.delete('/api/maxMeny/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_max WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });
    

    app.get('/api/thaimat', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from meals i det här fall då 
            const result = await db.query('SELECT * FROM meals_thaimat');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });

        
    app.post('/api/thaimat', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_thaimat (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
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

    app.delete('/api/thaimat/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_thaimat WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });

    app.get('/api/pizzahutMeny', async (req, res) => {
        //try catch
        try {
            //som vanligt, spara resultaten av alla meals from meals i det här fall då 
            const result = await db.query('SELECT * FROM meals_pizzaHut');
            res.json(result.rows);  
            //vid eventuella fail
        } catch (err) {
            console.error(err);
            res.status(500).send('Databas error');
        }
    });

    app.post('/api/pizzahutMeny', async (req, res) => {
        //sparar namnet, beskriving priset och image_path.
        const { name, description, price, image_path } = req.body;
        //try catch
        try {
            //sparar result variabel, och det är egentligen lägga till maträtterna i meals tabellen.
            const result = await db.query(
                'INSERT INTO meals_pizzaHut (name, description, price, image_path) VALUES ($1, $2, $3, $4) RETURNING *',
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

    app.delete('/api/pizzahutMeny/:id', async (req, res) => {
        //sparar mealId
        const mealId = req.params.id;
        //try catch
        try {
            //radera den id hela raden som är motsvarande då.
            await db.query('DELETE FROM meals_pizzaHut WHERE id = $1', [mealId]);
            res.status(204).send(); 
            //catch, vid eventuella fel
        } catch (err) {
            console.error(err);
            res.status(500).send('Error vid raderande av meal');
        }
    });
 
//visa vilken port man är på  
app.listen(port, () => {
    console.log(`Lyssnar på port ${port}`);
 });
