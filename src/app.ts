import express, { Application } from 'express';
import user from './routes/user';
import welcome from './welcome';

class App {
    public app: Application
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/', );
        this.app.use('/user', user);
    }

    listen(port: number) {
        this.app.listen(port, () => console.log('Server is running on port htpp://localhost:3335'))
    }
}

export { App };