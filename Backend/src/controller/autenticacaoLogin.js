const conexao = require('../database/index');

module.exports = {
    async verificaLoginAluno(request, response) {
        const { email, senha } = request.query;

        const comandoBusca = `SELECT email, senha FROM alunos WHERE email = ${email} AND senha = ${senha}`;
        await conexao.query(comandoBusca, (erro, resultado) => {
            if (erro) {
                return false;
            } else {
                console.log(resultado);
                return response.json(resultado);
            }
        })
    },

    async verificaLoginProf(request, response) {
        const comandoBusca = "SELECT * FROM atividades";
        await conexao.query(comandoBusca, (erro, resultado) => {
            if (erro) throw erro;

            return response.json(resultado);
        })
    },
};
