//Port
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Database
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URL
}

process.env.URLDB = urlDB;

//Vencimiento del token
// 60s * 60m * 24h * 30d
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//Seed - Semilla de auth
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//Client Id for Google Auth
process.env.CLIENT_ID = process.env.CLIENT_ID || '304792653453-9vageg0k7rm1r92pm1t7uq9smmd4c13a.apps.googleusercontent.com';