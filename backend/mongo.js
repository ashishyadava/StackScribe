const mongoose = require("mongoose");

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://ashishyadav:abcd123@cluster0.8qy7o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the MongodDB database!")
    } catch (err) {
        console.log("MongoDB connection error:", err.message);
        process.exit(1);
    }
};
 
module.exports = connectDB;

