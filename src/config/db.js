const mongoose = require('mongoose')

const inicializaMongoServer = async() => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useFindAndModify: false, 
            useUnifiedTopology: true 
        })
        console.log('Conectado ao banco')
    }catch(err){
        console.log('Deu ruim')
        console.log(err)
    }
}

module.exports = inicializaMongoServer 