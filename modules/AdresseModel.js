const mongoose = require('mongoose'); 
const { modelName } = require('./EntrepriseModel');

const adresseSchema = new mongoose.Schema({
    pays : { type : String, required : true },
    province : { type : String, required : true }, 
    ville : { type : String, required : true },
    voie : { type : String, required : true },
    numero : { type : String, required : true },
    entreprise : {type :mongoose.Schema.Types.ObjectId, ref : 'Entrepise'}
})

module.exports = mongoose.model('Adresse' , adresseSchema);