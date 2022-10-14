const mysql2 = require('mysql2');

const conexion = mysql2.createConnection({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
    database: process.env.DB_NAME,
    port: process.env.DB_PORT 
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es: '+error);
        return
    }
    console.log('Conectado a la BD'); 
})  

module.exports = conexion;  
