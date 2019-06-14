'use strict';

module.exports = function(app){
    var aluno = require('../controllers/alunoController');

    // routes  - CRUD (Create, Read, Update, Delete)
    app.route('/alunos')
    .get(aluno.listar_todos_alunos)
    .post(aluno.criar_aluno);

    app.route('/alunos/:alunoId')
    .get(aluno.listar_aluno_por_id)
    .put(aluno.atualizar_aluno)
    .delete(aluno.remover_aluno);
}