import express, { json } from "express";
import { createUser } from './database'

const app = express();
app.use(json());

app.get("/", (req, res) => {
    return res.send(`Usuário cadastrado com sucesso: ', ${JSON.stringify(createUser)}`);
});


app.listen(3334, () => {
    console.log("🚀 Server started on http://localhost:3334");
});