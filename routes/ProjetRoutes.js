const express = require('express');
const ProjetController = require('../controllers/ProjetController');

const projetRouter = express.Router();

// GET /projets : Récupère tous les projets
projetRouter.get('/projets', async (req, res) => {
    try {
        const projets = await ProjetController.recupererTousLesProjets();
        res.status(200).send(projets);
    } catch (err) {
        res.status(500).send('Erreur serveur.');
    }
});

// GET /projets/:id : Récupère un projet par son ID
projetRouter.get('/projets/:id', async (req, res) => {
    try {
        const projet = await ProjetController.recupererUnProjet(req.params.id);
        if (!projet) {
            return res.status(404).send("Projet non trouvé.");
        }
        res.status(200).send(projet);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// POST /projets : Ajoute un nouveau projet
projetRouter.post('/projets', async (req, res) => {
    const { titre, progres, deadline, developpeur, entreprise } = req.body;

    if (!titre || !progres || !deadline) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const nouveauProjet = await ProjetController.ajouterUnProjet(req.body);
        res.status(201).send(nouveauProjet);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// PUT /projets/:id : Modifie un projet existant
projetRouter.put('/projets/:id', async (req, res) => {
    const { titre, progres, deadline, developpeur, entreprise } = req.body;

    if (!titre && !progres && !deadline && !developpeur && !entreprise) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const projet = await ProjetController.modifierProjet(req.params.id, req.body);
        if (!projet) {
            return res.status(404).send("Projet non trouvé.");
        }
        res.status(200).send(projet);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /projets : Supprime tous les projets
projetRouter.delete('/projets', async (req, res) => {
    try {
        await ProjetController.supprimerTousLesProjets();
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /projets/:id : Supprime un projet par son ID
projetRouter.delete('/projets/:id', async (req, res) => {
    try {
        const projet = await ProjetController.supprimerUnProjet(req.params.id);
        if (!projet) {
            return res.status(404).send("Projet non trouvé.");
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

module.exports = projetRouter;
