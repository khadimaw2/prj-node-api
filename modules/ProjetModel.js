const mongoose = require('mongoose');

const projetSchema = new mongoose.Schema({
    titre: { type : String, required : true },
    progres : { type : String, required : true },
    deadline : { type : String, required : true },
    developpeur : [{type :mongoose.Schema.Types.ObjectId, ref : 'Developpeur'}],
    entreprise : {type : mongoose.Schema.Types.ObjectId, ref : 'Entreprise'}
})

module.exports = mongoose.model('Projet' , projetSchema);