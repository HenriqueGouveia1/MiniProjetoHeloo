const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '15963',
    database: 'helooproject'
})

app.post("/cadUser",(req,res)=>{
    const email = req.body.email;
    const login = req.body.login;
    const senha = req.body.senha;
    
    db.query("INSERT INTO users (email, login,senha) VALUES (?,?,?)", [email, login,senha],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send('socorro')
        }
    });
});

// app.post('/cadPost',(req,res)=>{
//     const email = req.body.email
//     const login = req.body.login
//     const senha = req.body.senha
//     db.query("INSERT INTO users (email, login,senha) VALUES (?,?,?)", [email, login,senha],
//     (err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send('')
//         }
//     })
// })


app.listen(3001, ()=>{
    console.log('macaco')
});