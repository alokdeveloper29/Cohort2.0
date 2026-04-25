import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB error:", err);
        throw err; 
    }
}

export default connectDb;