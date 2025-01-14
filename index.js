// MongoDB aggregation pipeline understanding
import mongoose from "mongoose";
import express from "express";

const app = express();

app.use(express.json());

const db = mongoose.connect("mongodb://localhost:27017/aggregate");

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.get("/authors", async (req, res) => {
    try {
        const authors = await db.collection("authors")
        res.json(authors);
    } catch (error) {
        console.log(error)
    }
});




app.listen(3000, () => {
    console.log('server is running on port 3000');
})