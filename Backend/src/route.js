const express = require('express');
const alunosController = require('./controller/alunosController');
const atividadesController = require('./controller/atividadesController');
const materiaisController = require('./controller/materiaisController');
const autenticacaoLogin = require('./controller/autenticacaoLogin');

const routes = express.Router();

routes.get('/alunos', alunosController.buscaAlunos);
routes.get('/alunos-busca', alunosController.buscaAlunosPorRa);

routes.get('/atividades', atividadesController.buscaAtividades);
routes.get('/materiais', materiaisController.buscaMateriais);
routes.get('/login-aluno', autenticacaoLogin.verificaLoginAluno);
routes.get('/login-prof', autenticacaoLogin.verificaLoginProf);

module.exports = routes;
