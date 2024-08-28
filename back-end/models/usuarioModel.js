const conexao = require("../infra/conexao");
class UsuarioModel {
    listar() {
        const sql = "SELECT * FROM usuario";
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error) {
                    console.log("Error no listar");
                    reject(error);   
                }
                console.log("Deu certo o listar")
                resolve(resposta);
            });
        });
    }

    criar(novoUsuario) {
        const sql = "INSERT INTO usuario SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoUsuario, (error, resposta) => {
                if(error) {
                    console.log("Error no criar usuario ");
                    reject(error);   
                }
                console.log("Deu certo o criar usuario")
                resolve(resposta);
            });
        });
    }
}

module.exports = new UsuarioModel();