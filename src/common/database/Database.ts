import * as applicationConfig from "config"
import { logger } from "../logging/Logger"
import * as MySQL from "mysql"
import { IDatabase } from "./IDatabase"
import { IDatabaseConfig } from "./IDatabaseConfig"
import { DatabaseConfigProvider } from "./DatabaseConfigProvider"

export class Database implements IDatabase {

    private connection: MySQL.Connection;

    constructor(config: IDatabaseConfig) {
        this.connection = MySQL.createConnection({
            host: config.hostnameAndPort,
            user: config.username,
            password: config.password,
            database: config.database
        })
        this.connection.connect()
    }

    public async query(query: MySQL.Query): Promise<any> {
        return new Promise<any>((resolve: any, reject: any) => {
            logger.info("SQL: " + query.sql)
            this.connection.query(query, (error: MySQL.MysqlError, results?: any, fields?: MySQL.FieldInfo[]) => {
                if(error) {
                    logger.error(error.message)
                    reject(error)
                }
                if(results == null) {
                    reject("No results")
                }
                resolve(results)
            })
        })
    }
}