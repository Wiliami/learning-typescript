import express, { Application } from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import routes from './routes/main.routes';

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(express.static(__dirname + '/public'));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', engine({extname: '.hbs'}));
        this.app.set('view engine', '.hbs');
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/', routes);
        this.app.use('*', (req, res) => res.render('404'));
    }

    listen(port: number) {
        this.app.listen(port, () => console.log('Server is running on port http://localhost:3335'));
    }
}

export { App };