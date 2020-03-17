const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const configMensaje = require('./configMensaje');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.post('/formulario', (req, res) => {

    configMensaje(req.body);
    res.status(200).send();
})
app.listen(3000, () => {
    console.log('Servidor corriendo')
});