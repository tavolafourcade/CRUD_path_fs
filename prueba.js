//Incluyendo paquete file system
let fs = require('fs');


//Escribamos un archivo
fs.writeFileSync('prueba.txt', 'Prueba 2');

//Agregando datos a un archivo
fs.appendFileSync('prueba.txt', 'Holaaa de nuevo');