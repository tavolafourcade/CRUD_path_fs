const { validationResult } = require('express-validator');
let userModel = require('../models/userModels');
let fs = require('fs');

const UserController = {
  registro: (req, res) => {
      res.render('registro');
  },
  create: (req, res) => {
    let usuario = {
      nombre: req.body.nombre,
      edad: req.body.edad,
      email: req.body.email
    }

  //Guardar usuario que es objeto literal en formato JSON (un string que puede ser escrito por ser texto)
  let usuarioJSON = JSON.stringify(usuario);

  //Escribir usuariosJSON en el archivo usuarios.json
  fs.writeFileSync('usuarios.json', usuarioJSON);
},
};


module.exports = UserController;