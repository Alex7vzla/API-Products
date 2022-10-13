import app from './app.js';
import {sequelize} from './database/database.js';
import './models/Products.js';

async function main(){
    try{
        await sequelize.sync();
        console.log('Connection has been established successfully.')
        app.listen(3000);
        console.log('Server on port', 3000);
    }catch(error){
        console.log('Unable to connect to the Database:', error);
    }
};

main();



/*
async function main(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.')
        app.listen(3000);
        console.log('Server on port', 3000);
    }catch(error){
        console.log('Unable to connect to the Database:', error);
    }
};

main();
*/