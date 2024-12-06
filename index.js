const bodyParser = require('body-parser');
const express = require('express');
const mongoose  = require('mongoose');

const app = express();

app.use(bodyParser.json);

app.listen(3000, () => {
    console.log(`Le serveur écoute sur le port 3000`);
    mongoose
    .connect('mongodb://localhost:27017/api-db')
    .then(() => console.log('Connexion avec MongoDB effectuée avec succès'))
    .catch((err) => console.error('Connexion avec MongoDB échouée'));
});