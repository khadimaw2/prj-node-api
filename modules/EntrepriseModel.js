const mongoose = require('mongoose'); 

const entrepriseSchema = new mongoose.Schema({
    nom : { type: String, required: true },
    dateCreation : { type : String, required : true },
    adresse : {type: mongoose.Schema.Types.ObjectId, ref: 'Adresse'}
});

module.exports = mongoose.model('Entreprise', entrepriseSchema);