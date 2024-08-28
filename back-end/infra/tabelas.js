class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaUsuario();
    }

    criarTabelaUsuario() {
        const sql = `
        CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    numero_de_sorteio INT,
    data_acesso DATE
    );
     `;
    this.conexao.query(sql, (error) => {
        if(error) {
            console.log('Deu erro na base')
            console.log(error.message);
            return;
        }
        console.log("Show criou a tabela")
    })
    };
    
}

module.exports = new Tabelas();