const usuarioModel = require("../models/usuarioModel")
class UsuarioController {
    buscar() {
        return usuarioModel.listar();
    }
    criar(novoUsuario) {
        return usuarioModel.criar(novoUsuario);
    }
    atualizar(id) {
        return "Alterando usuario...."
    }
    deletar(id) {
        return "Deletando usuario ..."
    }
}

module.exports = new UsuarioController();