import { Controller, Get, HttpCode } from "routing-controllers"
import { IDatabase } from "../common/database/IDatabase"
import { DatabaseProvider } from "../common/database/DatabaseProvider"
import { Controller as BaseController } from "./Controller"
import { ConsoleLogger } from "../common/logging/Logger";

@Controller()
export class HealthController extends BaseController {

    database: IDatabase

    constructor(databaseProvider: DatabaseProvider, logger: ConsoleLogger) {
        super(databaseProvider, logger)
        console.log("healthController constructor")
    }

    @Get("/health")
    getHealth() {
        this.database.query("SELECT 1")
            .then((results) => {

            })
            .catch((error) => {
                
            })
        return "OK"
    }
}