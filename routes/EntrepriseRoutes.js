const express = require('express');
const EntrepriseController = require('../controllers/EntrepriseController');

const entrepriseRouter = express.Router();

// GET : Récupérer toutes les entreprises
entrepriseRouter.get('/entreprises', async (req, res) => {
    try {
        const entreprises = await EntrepriseController.recupererTousLesEntreprise();
        res.status(200).send(entreprises);
    } catch (err) {
        res.status(500).send('Erreur serveur.');
    }
});

// GET /entreprises/:id : Récupérer une entreprise par son ID
entrepriseRouter.get('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await EntrepriseController.recupererUneEntreprise(req.params.id);
        if (!entreprise) {
            return res.status(404).send("Entreprise non trouvée.");
        }
        res.status(200).send(entreprise);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// POST /entreprise : Ajouter une nouvelle entreprise
entrepriseRouter.post('/entreprise', async (req, res) => {
    const { nom, dateCreation } = req.body;

    if (!nom || !dateCreation) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const nouvelleEntreprise = await EntrepriseController.ajouterUneEntreprise(req.body);
        res.status(201).send(nouvelleEntreprise);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// PUT /entreprises/:id : Modifier une entreprise existante
entrepriseRouter.put('/entreprises/:id', async (req, res) => {
    const nom = req.body.nom;
    const dateCreation = req.body.dateCreation;

    if (!nom && !dateCreation) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const entreprise = await EntrepriseController.modifierEntreprise(req.params.id, req.body);
        if (!entreprise) {
            return res.status(404).send("Entreprise non trouvée.");
        }
        res.status(200).send(entreprise);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /entreprises : Supprimer toutes les entreprises
entrepriseRouter.delete('/entreprises', async (req, res) => {
    try {
        await EntrepriseController.supprimerToutesLesEntreprises();
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /entreprises/:id : Supprimer une entreprise par son ID
entrepriseRouter.delete('/entreprises/:id', async (req, res) => {
    try {
        const entreprise = await EntrepriseController.supprimerUneEntreprise(req.params.id);
        if (!entreprise) {
            return res.status(404).send("Entreprise non trouvée.");
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

module.exports = entrepriseRouter;
