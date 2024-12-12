const mongoose = require('mongoose');

const developpeurSchema = new mongoose.Schema({
    nom : { type : String, required : true },
    prenom : { type : String, required : true },
    code : { type : Number, required : true },
    anciennete : { type : String, required : true },
    projet : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Projet'}],
    entreprise : { type : mongoose.Schema.Types.ObjectId, ref : 'Entreprise'  }
});

module.exports = mongoose.model('Developpeur' , developpeurSchema);