import app from './app.js';
import {db} from './database/database.js';
import './models/Products.js';

const PORT = process.env.PORT || 3000;

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)} )








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