const conexao = require('../database/index');

module.exports = {
    async buscaAlunos(request, response) {
        const comandoBusca = "SELECT * FROM alunos";
        await conexao.query(comandoBusca, (erro, resultado) => {
            if (erro) throw erro;

            return response.json(resultado);
        })
    },

    async buscaAlunosPorRa(request, response) {
        const {ra} = request.query;

        const comandoBuscaPorRa = `SELECT * FROM alunos WHERE ra = ${ra}`;
        await conexao.query(comandoBuscaPorRa, (erro, resultado) => {
            if (erro) throw erro;

            return response.json(resultado);
        })
    },
};
