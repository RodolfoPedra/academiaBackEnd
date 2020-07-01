import 'reflect-metadata';
import {createConnection} from 'typeorm';
import * as express from 'express';
import {Request, Response} from 'express';
import * as cors from 'cors';
import routes from "./routes";

import './database/index';

class App {
    server: any;
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;


