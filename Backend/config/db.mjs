// const mongoose=require("mongoose");
import mongoose from "mongoose";
// const colors =require("colors");
import colors from "colors";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`server connected to daabase ${conn.connection.host}.`.bgMagenta.white);
    }catch(error){
        console.log(`Error in mongodb ${error}`.bgRed.white);
    }
}

export default connectDB;
