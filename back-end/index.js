const express = require("express");
const app = express();
port = 3000
const router = require("./routes/index")
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas");

router(app, express);
tabelas.init(conexao);

app.listen(port, (error) => {
    if(error){
        console.log("Error");
        return;
    }
    console.log("Subiu");
});