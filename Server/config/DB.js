const mongoose = require("mongoose")

const connectDB = () => {
    
    try{
         mongoose.connect("mongodb://localhost:27017/country", {
            serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
         });
            console.log("succesfully DB connected")
        
    }catch (err) {
        console.log("DB not connected" , err)
    }
};

connectDB()

module.exports = connectDB;
