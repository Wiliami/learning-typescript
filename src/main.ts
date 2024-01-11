import express, { json } from "express";
// import {  } from './database';
import { createUser } from "./teste";
import { product } from "./products";

const app = express();
app.use(json());

app.get("/", (req, res) => {
    return res.json({ product, createUser });
});


app.listen(3334, () => {
    console.log("🚀 Server started on http://localhost:3334");
});