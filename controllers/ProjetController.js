const ProjetModel = require('../modules/ProjetModel');

class ProjetController {
    static async recupererTousLesProjets(){
        const Projets = await ProjetModel.find();
        return Projets ;
    }

    static async recupererUneProjet(id){
        const Projets = await ProjetModel.findById(id)
        return Projets ;
    }

    static async ajouterUneProjet(nouvellesDonnees){
        const NouvellesProjet = new ProjetModel(nouvellesDonnees);
        await NouvellesProjet.save();
    }

    static async modifierProjet(id, nouvellesDonnees){
        const projetModifie = await ProjetModel.findByIdAndUpdate(id, nouvellesDonnees);
        return projetModifie;
        
    }

    static async supprimerTousLesProjets(){
        await ProjetModel.deleteMany();
        return null ;
    }

    static async supprimerUneProjet(id){
        const ProjetSupprime = await ProjetModel.findByIdAndDelete(id);
        return ProjetSupprime ;
    }

}

module.exports = ProjetController ;