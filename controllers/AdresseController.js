const AdresseModel = require('../modules/AdresseModel');

class AdresseController {
    static async recupererTousLesAdresses(){
        const Adresses = await AdresseModel.find();
        return Adresses ;
    }

    static async recupererUneAdresse(id){
        const Adresses = await AdresseModel.findById(id)
        return Adresses ;
    }

    static async ajouterUneAdresse(nouvellesDonnees){
        const NouvellesAdresse = new AdresseModel(nouvellesDonnees);
        await NouvellesAdresse.save();
    }

    static async modifierAdresse(id, nouvellesDonnees){
        const EntrepiseModifiee = await findByIdAndUpdate(nouvellesDonnees);
        return EntrepiseModifiee;
    }

    static async supprimerToutesLesAdresses(){
        await AdresseModel.deleteMany();
        return null ;
    }

    static async supprimerUneAdresse(id){
        const AdresseSupprimee = await AdresseModel.findByIdAndDelete(id);
        return AdresseSupprimee ;
    }

}

module.exports = AdresseController ;