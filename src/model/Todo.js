const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    materia:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    nota:{
        type: Number,
        required: false
    }
    
})

const Todo = mongoose.model('Todo', TodoSchema )

module.exports = Todo