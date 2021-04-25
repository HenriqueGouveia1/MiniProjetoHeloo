const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('helooproject', 'root', '15963', {
    host: "localhost",
    dialect: "mysql"
});

const Usuario = sequelize.define('users', {
    login: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.INTEGER
    },

})

