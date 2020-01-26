const mysql = require('mysql');

// Cria conexao com o banco.
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'suporte',
});

module.exports = conexao;
