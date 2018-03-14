import * as path from "path"
import * as express from "express"
import * as bodyParser from "body-parser"
import { useExpressServer } from "routing-controllers";
import { logger } from "./logging/Logger"
import { HealthController } from "../controllers/HealthController"

export class ExpressConfig {

    app: express.Express

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json());
        this.setupControllers()
    }

    setupControllers() {
        const controllers: Array<any> = [
            HealthController
        ]
        useExpressServer(this.app, {
            routePrefix: "/api",
            controllers: controllers
        })
        controllers.forEach(controller => {
            logger.info(`mounted controller: ${controller.name}`)
        })
    }
}