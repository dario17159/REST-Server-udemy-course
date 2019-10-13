//Port
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Database
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://ponpon:bMtRYkg2GSj69jaM@cluster0-m7u7a.mongodb.net/cafe'
}

process.env.URLDB = urlDB;