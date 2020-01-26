const conexao = require('../database/index');

module.exports = {
    async buscaAtividades(request, response) {
        const comandoBusca = "SELECT * FROM atividades";
        await conexao.query(comandoBusca, (erro, resultado) => {
            if (erro) throw erro;

            return response.json(resultado);
        })
    },
};
