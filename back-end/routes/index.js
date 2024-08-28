const { extend } = require('lodash');
const routerSorteio = require('./usuarioRoute');
module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(routerSorteio);
}