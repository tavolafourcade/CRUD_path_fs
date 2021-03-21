//Requerir paquete file system
let fs = require('fs');

//Leer el archivo
//1er parámetro: nombre de archivo a leer.
//2do parámetro: encoding utf-8 para que nos de el contenido del buffer
let contenido = fs.readFileSync('leerArchivo.txt',{encoding: 'utf-8'});

console.log(contenido);