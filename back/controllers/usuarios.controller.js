const userModel = require('../models/usuarios.model');

exports.consultar = async (req, res) => {
    let resultado = await userModel.find();
    //console.log(resultado);
    return resultado;
};

exports.crear = async (req, res) => {
    let nuevoUsuario = {
        correo: "ocha@hotmaaaaail.com",
        pass: "789456123"
    };
    /*let n = new userModel(nuevoUsuario);*/
    return await userModel(nuevoUsuario).save();
};

exports.eliminar = async (req, res) => {
    let eliminarUsuario = {
        "correo": "andres@gmail.com"
    };
    
   return await userModel.deleteOne(eliminarUsuario);
};

exports.actualizar = async (req, res) => {
    let eliminarUsuario = {
        "correo": "andres@gmail.com"
    };
    
   return await userModel.deleteOne(eliminarUsuario);
};

exports.consultarUno = async (req, res, correo) => {
    try{
        let resultado = await userModel.findOne({correo:correo});
        if (!resultado) {
            return res.status(404).json({mensaje: "Usuario no encontrado"});
        }
        res. status(200).json(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Se presento un error al consultar el usuario"});
    }
};
