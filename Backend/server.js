const Sequelize = require('sequelize')
const mysql2 = require('mysql2')
const sequelize = new Sequelize('helooproject', 'root', '15963', {
    host: "localhost",
    dialect: 'mysql'
})

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Criando uma coneão com o banco de dados
const db = mysql2.createConnection({
    user: "root",
    host: "localhost",
    password: "15963",
    database: "helooproject",
  });

//Fazendo adição de um novo post de um projeto na tabela "posts" com o sequeliza
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

//Criando a rota para adição do projeto
app.post('/cadPost', (req, res) => {

    const nome = req.body.nome;
    const desc = req.body.desc;
    const nomeResp = req.body.nomeResp;
    const viability = req.body.viability;
    const dataDoInicio = req.body.dataDoInicio;
    const dataDoFim = req.body.dataDoFim;
    const valor = req.body.valor;
    const situation = req.body.situation;

    //executando a criação pelo sequelize enviando a resposta e redirecionando pelo frontend
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
       res.send("Post criado com sucesso!")
    }).catch(function(err){
        res.send("Aconteceu o seguinte erro: " + err)
    })
});

//Criando a rota para pegar as informações do banco e executando a query diretamente 
//Dando destaque aos projetos com maior viabilidade
app.get("/getProject", (req, res) => {
    db.query("SELECT * FROM posts ORDER BY viability DESC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//Criando a rota para pegar as informações do banco e executando a query diretamente 
//Dando destaque aos projetos de acordo data prevista para o início do projeto  
app.get("/getProjectByDate", (req, res) => {
    db.query("SELECT * FROM posts ORDER BY dataDoInicio DESC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//Criando a rota para pegar as informações do banco e executando a query diretamente 
//Dando destaque aos projetos de acordo situação em que se encontra  
app.get("/getProjectBySituation", (req, res) => {
    db.query("SELECT * FROM posts ORDER BY situation DESC", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//Rota de Update do projeto 
app.put("/editarProjeto", (req, res) => {
    const desc = req.body.desc;
    const situation = req.body.situation;
    const viability = req.body.viability;
    const id = req.body.id;
    
    post.update({ desc, situation, viability }, {
        where: {
             id
        }
      });

})

app.listen(3030, () => {
    console.log('RUNNIGN...')
});