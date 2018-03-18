import { IDatabase } from "../common/database/IDatabase"
import { DatabaseProvider } from "../common/database/DatabaseProvider"
import { ConsoleLogger } from "../common/logging/Logger"

export abstract class Controller {

    protected database: IDatabase
    protected logger: ConsoleLogger // TODO use interface

    constructor(databaseProvider: DatabaseProvider, logger: ConsoleLogger) {
        console.log("abstract controller constructor")
        this.database = databaseProvider.provide()
        this.logger = logger
    }
}