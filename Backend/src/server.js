const express = require('express');
const routes = require('./route');
const conexaoBanco = require('./database/index');

const app = express();

conexaoBanco.connect((erro) => {
    if (erro) {
        throw erro;
    }
    console.log("conectou")
})

app.use(express.json());
app.use(routes);

app.listen(3333);
