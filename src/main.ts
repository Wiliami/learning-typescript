import express, { json } from "express";
import { listUsers } from './database';
// import { createUser } from "./teste";
// import { product } from "./products";

const app = express();
app.use(json());

app.get("/", (req, res) => {
    return res.send('Olá, mundo!');
});

app.listen(3334, () => {
    console.log("🚀 Server started on http://localhost:3334");
});