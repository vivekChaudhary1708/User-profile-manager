import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
        });

        console.log(`Bhai connection successful: ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error aa gya bhai!! ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;