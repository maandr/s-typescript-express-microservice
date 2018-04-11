import { ExpressApplication } from './express'
import { ApplicationConfig } from './config/config'
import { logger } from './logging/logger'
import * as config from 'config'

export class Application {

    port: number
    server: any

    constructor(
        public express: ExpressApplication = new ExpressApplication()
    ) {}

    configure(): Application {
        logger.info(`configuring application..`)
        this.port = parseInt(ApplicationConfig.get('express.port'))
        return this
    }

    run(): Application {
        this.server = this.express.app.listen(this.port, (error: any) => { 
            if(error) {
                logger.error(`
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Application startup failed.
                    Reason: ${error}
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                `)
            } else {
                logger.info(`
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Server started!
                    Express: http://localhost:${this.port}/api
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                `)
            }
        })
        return this
    }
}

