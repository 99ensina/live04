'use strict';

var moongose = require('mongoose');
var Schema = moongose.Schema;

var AlunoSchema = new Schema ({

    nome: {
        type: String,
        required: 'Nome do aluno é obrigatório'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = moongose.model('Alunos', AlunoSchema);