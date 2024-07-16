const express = require('express');
const modeloUsuario = require('./back/controllers/usuarios.controller');

let app = express();

app.get('/consultar', (req, res) => {
    modeloUsuario.consultar();
});

app.get('/insertar', (req, res) => {
    if(modeloUsuario.crear()) {
        res.status(200).json({"mensaje": "Registro exitoso"});
    } else {
        res.status(500).json({"mensaje": "Se presentó un error"});
    };
});

app.get('/eliminar', (req, res) => {
    if(modeloUsuario.eliminar()) {
        res.status(200).json({"mensaje": "Eliminación exitosa"});
    } else {
        res.status(500).json({"mensaje": "Se presentó un error"});
    };
});



app.listen(9999);