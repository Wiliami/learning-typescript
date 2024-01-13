import express, { json } from "express";

const app = express();
app.use(json());


app.get('/', (req, res) => {
    return res.send("Hello World"); 
});


app.listen(3334, () => {
    console.log("Server start on port http://localhost:3334 🚀");
});