const EntrepriseModel = require('../modules/EntrepriseModel');

class EntrepriseController {
    static async recupererTousLesEntreprise(){
        const Entreprises = await EntrepriseModel.find();
        return Entreprises ;
    }

    static async recupererUneEntreprise(id){
        const Entreprises = await EntrepriseModel.findById(id)
        return Entreprises ;
    }

    static async ajouterUneEntreprise(nouvellesDonnees){
        const NouvellesEntreprise = new EntrepriseModel(nouvellesDonnees);
        await NouvellesEntreprise.save();
    }

    static async modifierEntreprise(id, nouvellesDonnees){
        const EntrepiseModifiee = await findByIdAndUpdate(nouvellesDonnees);
        return EntrepiseModifiee;
    }

    static async supprimerToutesLesEntreprises(){
        await EntrepriseModel.deleteMany();
        return null ;
    }

    static async supprimerUneEntreprise(id){
        const EntrepriseSupprimee = await EntrepriseModel.findByIdAndDelete(id);
        return EntrepriseSupprimee ;
    }

}

module.exports = EntrepriseController ;