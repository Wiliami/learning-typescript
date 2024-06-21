import express, { Application } from "express";
import { engine } from "express-handlebars";
import path from "path";
import routes from "../routes";

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.engine(".hbs", engine({
            extname: ".hbs",
            defaultLayout: "main",
            layoutsDir: path.join(__dirname, 'views', 'layouts'),
            partialsDir: path.join(__dirname, 'views', 'partials')
        }));

        this.app.set("view engine", ".hbs");
        this.app.set("views", path.join(__dirname, "../views"));

        // Configuração dos middlewares
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use("/", routes);
        this.app.use("*", (req, res) => res.render("404"));
    }

    listen(port: number) {
        this.app.listen(port, () => console.log("Server is running on port http://localhost:3335"));
    }
}

export { App };