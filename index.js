// MongoDB aggregation pipeline understanding

import express from "express";
import { dbConnect } from "./config/dbConfig.js";
import { aggregationRoutes } from "./controller/aggregationRoutes.js";

const app = express();

app.use(express.json());

app.use("/",aggregationRoutes)

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
    dbConnect()
})