const express = require('express');
const AdresseController = require('../controllers/AdresseController');

const adresseRouter = express.Router();

// GET /adresses : Récupère toutes les adresses
adresseRouter.get('/adresses', async (req, res) => {
    try {
        const adresses = await AdresseController.recupererTousLesAdresses();
        res.status(200).send(adresses);
    } catch (err) {
        res.status(500).send('Erreur serveur.');
    }
});

// GET /adresses/:id : Récupère une adresse par son ID
adresseRouter.get('/adresses/:id', async (req, res) => {
    try {
        const adresse = await AdresseController.recupererUneAdresse(req.params.id);
        if (!adresse) {
            return res.status(404).send("Adresse non trouvée.");
        }
        res.status(200).send(adresse);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// POST /adresses : Ajoute une nouvelle adresse
adresseRouter.post('/adresses', async (req, res) => {
    const { pays, province, ville, voie, numero, entreprise } = req.body;

    if (!pays || !province || !ville || !voie || !numero) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const nouvelleAdresse = await AdresseController.ajouterUneAdresse(req.body);
        res.status(201).send(nouvelleAdresse);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// PUT /adresses/:id : Modifie une adresse existante
adresseRouter.put('/adresses/:id', async (req, res) => {
    const { pays, province, ville, voie, numero, entreprise } = req.body;

    if (!pays && !province && !ville && !voie && !numero && !entreprise) {
        return res.status(400).send("Données incomplètes.");
    }

    try {
        const adresse = await AdresseController.modifierAdresse(req.params.id, req.body);
        if (!adresse) {
            return res.status(404).send("Adresse non trouvée.");
        }
        res.status(200).send(adresse);
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /adresses : Supprime toutes les adresses
adresseRouter.delete('/adresses', async (req, res) => {
    try {
        await AdresseController.supprimerToutesLesAdresses();
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

// DELETE /adresses/:id : Supprime une adresse par son ID
adresseRouter.delete('/adresses/:id', async (req, res) => {
    try {
        const adresse = await AdresseController.supprimerUneAdresse(req.params.id);
        if (!adresse) {
            return res.status(404).send("Adresse non trouvée.");
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send("Erreur serveur.");
    }
});

module.exports = adresseRouter;
