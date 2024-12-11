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
    }

    static async modifierDeveloppeur(id, nouvellesDonnees){
        const EntrepiseModifie = await findByIdAndUpdate(nouvellesDonnees);
        return EntrepiseModifie;
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