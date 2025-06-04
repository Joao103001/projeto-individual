var database = require("../database/config");

function buscarUltimasMedidas(usuario_id) {

    var instrucaoSql = `select acertosTotal from usuarios join resultadoquiz on fkUser = id
    where fkUser = ${usuario_id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(usuario_id) {

    var instrucaoSql = `select acertosTotal from usuarios join resultadoquiz on fkUser = id
    where fkUser = ${usuario_id}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
