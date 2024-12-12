const ProjetModel = require('../modules/ProjetModel');

class ProjetController {
    static async recupererTousLesProjets(){
        const Projets = await ProjetModel.find();
        return Projets ;
    }

    static async recupererUnProjet(id){
        const Projets = await ProjetModel.findById(id)
        return Projets ;
    }

    static async ajouterUnProjet(nouvellesDonnees){
        const NouveauProjet = new ProjetModel(nouvellesDonnees);
        await NouveauProjet.save();
        return NouveauProjet ;
    }

    static async modifierProjet(id, nouvellesDonnees){
        const projetModifie = await ProjetModel.findByIdAndUpdate(id, nouvellesDonnees);
        return projetModifie;
        
    }

    static async supprimerTousLesProjets(){
        await ProjetModel.deleteMany();
        return null ;
    }

    static async supprimerUnProjet(id){
        const ProjetSupprime = await ProjetModel.findByIdAndDelete(id);
        return ProjetSupprime ;
    }

}

module.exports = ProjetController ;