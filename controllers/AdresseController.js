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
        const NouvellesAdresses = new AdresseModel(nouvellesDonnees);
        await NouvellesAdresses.save();
        return NouvellesAdresses;
    }

    static async modifierAdresse(id, nouvellesDonnees) {
        const adresseModifiee = await AdresseModel.findByIdAndUpdate(id, nouvellesDonnees);
        return adresseModifiee;
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