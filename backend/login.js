const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


const user = {
  username: 'admin',
  password: '1234'
};

app.use(express.static('public'));
app.use(express.json());


app.get('/login', async (req,res) =>{
    res.render("login.ejs",{fel_meddelande: null});
})

app.post('/login', async (req, res) => {
   
    const admin_name = req.body.admin_name;
    const password = req.body.password;

    if (admin_name === "admin" && password === "12345") {
        res.redirect('/admin');
    } else {
        console.log("Fel lösenord eller användarnamn!");
        
        res.render("login.ejs", {fel_meddelande:"Fel lösenord eller användarnamn!"});
    }
}); 
app.listen(PORT, () => console.log(`Servern körs på http://localhost:${PORT}`));
