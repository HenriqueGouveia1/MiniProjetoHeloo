const Sequelize = require('sequelize')
const sequelize = new Sequelize('helooproject', 'root', '15963', {
    host: "localhost",
    dialect: 'mysql'
})

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


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
    })
});

app.post('/cadPost',(req,res)=>{
    
    const nome = req.body.nome;
    const desc = req.body.desc;
    const nomeResp = req.body.nomeResp;
    const viability= req.body.viability;
    const dataDoInicio = req.body.dataDoInicio;
    const dataDoFim = req.body.dataDoFim;
    const valor = req.body.valor;
    const situation = req.body.valor;
    
    post.create({
        nome: nome,
        desc: desc,
        nomeResp: nomeResp,
        viability: viability,
        dataDoFim: dataDoFim,
        dataDoInicio: dataDoInicio,
        valor: valor,
        situation: situation
    })
});


app.listen(3030, () => {
    console.log('macaco1')
});