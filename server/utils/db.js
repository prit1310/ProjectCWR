require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

if (!URI) {
    console.error("❌ MONGODB_URI is missing from .env file");
    process.exit(1); 
}

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("✅ Connected to MongoDB successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
