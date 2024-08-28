const { Route, Router } = require("express");
const router= Router();
const usuarioController = require("../controllers/usuarioController");

//GET, PUT, POST, DELETE

router.get('/sorteios', (req, res) => {
    const listaUsuarios = usuarioController.buscar();
    listaUsuarios
        .then((usuarios) => res.status(200).json(usuarios))
        .catch((error) => res.status(400).json(error.message));
});

router.post('/sorteios', (req, res) => {
    const novoUsuario = req.body;
    const usuario = usuarioController.criar(novoUsuario);
    usuario.then((usuarioCriado) => res.status(201).json(usuarioCriado)).catch((error) => res.status(400).json(error.message));
});

/*
router.put('/sorteio', (req, res) => {
    const { id } = req.params;
    const resposta = usuarioController.atualizar(id);
    res.send(resposta);
});

router.delete('/sorteio', (req, res) => {
    const { id } = req.params;
    const resposta = usuarioController.deletar(id);
    res.send(resposta);
});
*/
module.exports = router;