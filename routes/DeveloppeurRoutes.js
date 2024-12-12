const express = require('express');
const DeveloppeurController = require('../controllers/DeveloppeurController');

const developpeurRouter = express.Router();

// GET /developpeurs : Récupère tous les développeurs
developpeurRouter.get('/developpeurs', async (req, res) => {
    try {
        const developpeurs = await DeveloppeurController.recupererTousLesDeveloppeurs();
        res.status(200).send(developpeurs);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// GET /developpeurs/:id : Récupère un développeur par son ID
developpeurRouter.get('/developpeurs/:id', async (req, res) => {
    try {
        const developpeur = await DeveloppeurController.recupererUneDeveloppeur(req.params.id);
        if (!developpeur) {
            return res.status(404).send("Développeur non trouvé.");
        }
        res.status(200).send(developpeur);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// POST /developpeurs : Ajoute un nouveau développeur
developpeurRouter.post('/developpeurs', async (req, res) => {
    const { nom, prenom, code, anciennete, projet, entreprise } = req.body;

    if (!nom || !prenom || !code || !anciennete) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const nouveauDeveloppeur = await DeveloppeurController.ajouterUneDeveloppeur(req.body);
        res.status(201).send(nouveauDeveloppeur);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// PUT /developpeurs/:id : Modifie un développeur existant
developpeurRouter.put('/developpeurs/:id', async (req, res) => {
    const { nom, prenom, code, anciennete, projet, entreprise } = req.body;

    if (!nom && !prenom && !code && !anciennete && !projet && !entreprise) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const developpeur = await DeveloppeurController.modifierDeveloppeur(req.params.id, req.body);
        if (!developpeur) {
            return res.status(404).send("Développeur non trouvé.");
        }
        res.status(200).send(developpeur);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /developpeurs : Supprime tous les développeurs
developpeurRouter.delete('/developpeurs', async (req, res) => {
    try {
        await DeveloppeurController.supprimerTousLesDeveloppeurs();
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /developpeurs/:id : Supprime un développeur par son ID
developpeurRouter.delete('/developpeurs/:id', async (req, res) => {
    try {
        const developpeur = await DeveloppeurController.supprimerUneDeveloppeur(req.params.id);
        if (!developpeur) {
            return res.status(404).send("Développeur non trouvé.");
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

module.exports = developpeurRouter;
