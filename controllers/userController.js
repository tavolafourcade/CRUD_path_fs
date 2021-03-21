let { validationResult } = require('express-validator');
// let userModel = require('../models/userModels');
let fs = require('fs');

let UserController = {
  'register': (req, res) => {
    res.render('register');
  },
  
  'login': (req, res) => {
    res.render('login');
  },
  'list': (req, res) => {
    let users = [
      {id: 1, name: 'Dario'},
      {id: 2, name: 'Javier'},
      {id: 3, name: 'Maru'},
      {id: 4, name: 'Octavio'},
    ];
    res.render('userList', {'users': users})
  },
  'search': (req, res) => {
    let searchUser = req.query.search;
    let users = [
      {id: 1, name: 'Dario'},
      {id: 2, name: 'Javier'},
      {id: 3, name: 'Maru'},
      {id: 4, name: 'Octavio'},
    ];

    let usersResults = [];

    for (let i = 0; i < users.length; i++){
      if (users[i].name.includes(searchUser)){
        usersResults.push(users[i]);
      }
    };

    res.render('usersResults', {usersResults: usersResults});
  },

  create: (req, res) => {
    let usuario = {
      nombre: req.body.nombre,
      edad: req.body.edad,
      email: req.body.email
    }

    //GUARDAR UN USUARIO
    //Guardar usuario que es objeto literal en formato JSON (un string que puede ser escrito por ser texto)
    //let usuarioJSON = JSON.stringify(usuario);

    //Escribir usuariosJSON en el archivo usuarios.json
    //fs.writeFileSync('usuarios.json', usuarioJSON);

    //1ro. Leer que cosas ya habia (no quiero sobre escribir usuarios registrados)
    let archivoUsuario = fs.readFileSync('usuario.json', {encoding: utf-8});
    //Ahora este archivo tiene una extension .json

    //2do. Para leer la informacion usamos JSON.parse para descomprimir la informacion
    let usuarios = JSON.parse(archivoUsuario);
  }
};


module.exports = UserController;