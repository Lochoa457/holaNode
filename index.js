const express = require('express');
const modeloUsuario = require('./back/controllers/usuarios.controller');

let app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/usuarios', async (req, res) => {
    let resultado = await modeloUsuario.consultar();
    if (resultado) {
        // console.log(resultado)
        res.status(200).json(resultado)
    } else {
        res.status(200).json({"mensaje": "Se presentó un error"})
    }
});

app.post('/usuarios', (req, res) => {
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

app.get('/consultarUno/:ref', async (req, res) => {
    try {
        let correo = req.params.ref;
        await modeloUsuario.consultarUno(req, res, correo);
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Se presento un error"});
    };
/*    if(modeloUsuario.consultarUno(req, res, req.params.ref)) {
        res.status(200).json({"mensaje": "Consulta exitosa"});
    } else {
        res.status(500).json({"mensaje": "Se presentó un error"});
    }; */
});



app.listen(9999, () => {
    console.log('Servidor iniciado en http://localhost:9999');
});