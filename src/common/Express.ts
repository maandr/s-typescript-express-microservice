import * as path from "path"
import * as express from "express"
import * as bodyParser from "body-parser"
import { useExpressServer } from "routing-controllers";
import { logger } from "./Logger"

export class ExpressConfig {

    app: express.Express

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json());
        this.setupControllers()
    }

    setupControllers() {
        const controllerPath = path.resolve("dist", "controllers");
        logger.info(`looking for controllers in ${controllerPath}`)
        useExpressServer(this.app, {
            controllers: [ controllerPath ]
        })
    }
}