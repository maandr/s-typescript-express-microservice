import { ExpressConfig } from "./Express"
import { logger } from "./Logger"
//import * as config from "../config"

export class Application {

    server: any
    express: ExpressConfig

    constructor() {
        this.express = new ExpressConfig()
        //const port = config.get("express.port")// TODO: fix
        const port = 8080
        this.server = this.express.app.listen(port, (error: any) => {
            if(error) {
                logger.error(`-----------------`)
                logger.error(`Application startup failed!`)
                logger.error(`Reason: ${error}`)
                logger.error(`-----------------`)
            } else {
                logger.info(`-----------------`)
                logger.info(`Server started!`)
                logger.info(`Express: http://localhost:${port}`)
                logger.info(`-----------------`)
            }
        })
    }
}

