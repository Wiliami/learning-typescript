import express, { json } from "express";
import { createUser } from './database';

const app = express();
app.use(json());

const data: object = {
    name: 'Wiliamis',
    age: 26,
    gender: 'Male'
};

app.get("/", (req, res) => {
    return res.send(`Usuário cadastrado com sucesso: ', ${JSON.stringify(createUser)}`);
});


app.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
});