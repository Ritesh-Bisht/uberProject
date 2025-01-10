const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT,
    ).then, (
        ()=> {
        console.log('!!! yess Connected to dataBase');
    }).catch(e => console.log(e));
}
module.exports=connectToDb;