const DeveloppeurModel = require('../modules/DeveloppeurModel');

class DeveloppeurController {
    static async recupererTousLesDeveloppeurs(){
        const Developpeurs = await DeveloppeurModel.find();
        return Developpeurs ;
    }

    static async recupererUneDeveloppeur(id){
        const Developpeurs = await DeveloppeurModel.findById(id)
        return Developpeurs ;
    }

    static async ajouterUneDeveloppeur(nouvellesDonnees){
        const NouvellesDeveloppeur = new DeveloppeurModel(nouvellesDonnees);
        await NouvellesDeveloppeur.save();
        return NouvellesDeveloppeur;
    }

    static async modifierDeveloppeur(id, nouvellesDonnees){
        const developpeurModifie = await DeveloppeurModel.findByIdAndUpdate(id, nouvellesDonnees);
        return developpeurModifie;
    }

    static async supprimerTousLesDeveloppeurs(){
        await DeveloppeurModel.deleteMany();
        return null ;
    }

    static async supprimerUneDeveloppeur(id){
        const DeveloppeurSupprime = await DeveloppeurModel.findByIdAndDelete(id);
        return DeveloppeurSupprime ;
    }

}

module.exports = DeveloppeurController ;