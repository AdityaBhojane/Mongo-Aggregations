import mongoose from "mongoose";
export async function dbConnect(){
    try {
        await mongoose.connect("mongodb://localhost:27017/Aggregation");
        console.log('Connected to database');
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}