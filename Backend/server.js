const Sequelize = require('sequelize')
const mysql = require('mysql')
const sequelize = new Sequelize('helooproject', 'root', '15963', {
    host: "localhost",
    dialect: 'mysql'
})

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "15963",
    database: "helooproject",
  });

const user = sequelize.define('users', {
    login: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING

})

const post = sequelize.define('posts', {
    nome: Sequelize.STRING,
    desc: Sequelize.STRING,
    nomeResp: Sequelize.STRING,
    viability: Sequelize.STRING,
    dataDoFim: Sequelize.DATE,
    dataDoInicio: Sequelize.DATE,
    valor: Sequelize.NUMBER,
    situation: Sequelize.STRING
})

app.post("/cadUser", (req, res) => {
    const email = req.body.email;
    const login = req.body.login;
    const senha = req.body.senha;

    user.create({
        email: email,
        login: login,
        senha: senha
    }).then(function(){
        res.redirect('/')
    }).catch(function(err){
        res.send("Aconteceu o seguinte erro: " + err)
    })
});

app.post('/cadPost', (req, res) => {

    const nome = req.body.nome;
    const desc = req.body.desc;
    const nomeResp = req.body.nomeResp;
    const viability = req.body.viability;
    const dataDoInicio = req.body.dataDoInicio;
    const dataDoFim = req.body.dataDoFim;
    const valor = req.body.valor;
    const situation = req.body.situation;

    post.create({
        nome: nome,
        desc: desc,
        nomeResp: nomeResp,
        viability: viability,
        dataDoFim: dataDoFim,
        dataDoInicio: dataDoInicio,
        valor: valor,
        situation: situation
    }).then(function(){
        res.redirect('/feed')
    }).catch(function(err){
        res.send("Aconteceu o seguinte erro: " + err)
    })
});

app.get("/getProject", (req, res) => {
    db.query("SELECT * FROM posts ORDER BY viability DESC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/editarProjeto", (req,res) => {
    const desc = req.body.desc;
    const situation = req.body.situation;
    const viability = req.body.viability;
    const id = req.body.id;
    
    db.query(
    "UPDATE posts SET desc = ?, situation = ?, viability = ?, WHERE id = ? ",
    [desc, situation, viability, id ],
    (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
    }) 
})

app.listen(3030, () => {
    console.log('Estamos online!')
});