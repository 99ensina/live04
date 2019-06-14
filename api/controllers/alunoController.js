'use strict';

/** NODE: Ambiente completo para execução de JS no backend (server-side),
 *  assincrono e single thread 
 * 
 * EXPRESS: Conjunto de features pro Node, inclusive na questão da construção da API.
 * 
 * MONGOOSE: Auxilia na conexão com o MongoDB
 * 
 * */

/**API - Application Programming Interface - Documentação (SWAGGER) 
 * 
 * REST - Representional State Transfer - conjunto de regras
 * 
 * RESTFUL - Aplicação dos conceitos REST
 * 
 * */ 

 /** PRÉ REQUISITOS 
  * Instação do Node (last version) + npm
  * Instalação do MongoDB
  * Instalação do Robo T3 (antigo robomongo) - opcional
 */

var mongoose = require('mongoose'),
    Aluno = mongoose.model('Alunos');


// GET - listar todos os alunos cadastrados
exports.listar_todos_alunos = function(req, res){
    Aluno.find({}, function(err, alunos){
        if(err){
            res.send(err);
        }
        res.json(alunos);
    });
}

// POST - cadastrar um novo aluno
exports.criar_aluno = function(req, res) {
    var novo_aluno = new Aluno(req.body);
    novo_aluno.save(function(err, aluno) {
        if(err){
            res.send(err);
        }
        res.json(aluno);
    });
}

// GET by ID - retorna um aluno por um id especifico
exports.listar_aluno_por_id = function(req, res) {
    Aluno.findById(req.params.alunoId, function(err, aluno){
        if(err){
            res.send(err);
        }
        res.json(aluno);
    });
}

// PUT - atualizar os dados de um aluno existente
exports.atualizar_aluno = function(req, res) {
    Aluno.findOneAndUpdate({_id: req.params.alunoId}, req.body, {new:true}, function(err, aluno){
        if(err){
            res.send(err);
        }
        res.json(aluno);
    });
}

//DELETE - remover um aluno existente
exports.remover_aluno = function(req, res) {
    Aluno.remove({_id: req.params.alunoId}, function(err, aluno){
        if(err){
            res.send(err);
        }
        res.json( { message: 'Aluno removido com sucesso'} );
    });
}

