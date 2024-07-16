const userModel = require('../models/usuarios.model');
const userController = require('../models/usuarios.model');

exports.consultar = async (req, res) => {
    let resultado = await userController.find();
    console.log(resultado);
};

exports.crear = async (req, res) => {
    let nuevoUsuario = {
        correo: "ochoa457aa@hotmail.com",
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