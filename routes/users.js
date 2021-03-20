var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Ruta para mostrar el formulario de registro
router.get('/register', userController.register);

//Ruta para enviar el formulario por el usuario
router.post('/register', userController.create);

router.get('/login', userController.login);

router.get('/list', userController.list);
module.exports = router;
