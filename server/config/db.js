const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL); 
        console.log(`Data base connected ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
}

module.exports  = connectDB;