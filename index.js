const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const entrepriseRouter = require('./routes/EntrepriseRoutes');
const adresseRouter = require('./routes/AdresseRoutes');
const developpeurRouter = require('./routes/DeveloppeurRoutes');
const projetRouter = require('./routes/ProjetRoutes');

const app = express();
app.use(bodyParser.json());

app.use(entrepriseRouter);
app.use(adresseRouter);
app.use(developpeurRouter);
app.use(projetRouter);

app.listen(3000, () => {
    console.log(`Le serveur écoute sur le port 3000`);
    mongoose
    .connect('mongodb://localhost:27017/projet-finSession-db')
    .then(() => console.log('Connexion avec MongoDB effectuée avec succès'))
    .catch((err) => console.error('Connexion avec MongoDB échouée'));
});


