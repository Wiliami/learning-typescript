import express, { json } from "express";

const app = express();
app.use(json());


app.get("/", (req, res) => {
    return res.json({ message: "Hello, Typescript!" });
});


app.listen(3000, () => {
    console.log("🚀 Server started on http://localhost:3000");
});