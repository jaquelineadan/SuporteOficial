const conexao = require('../database/index');

module.exports = {
    async buscaMateriais(request, response) {
        const comandoBusca = "SELECT * FROM materiais";
        await conexao.query(comandoBusca, (erro, resultado) => {
            if (erro) throw erro;

            return response.json(resultado);
        })
    },
};
