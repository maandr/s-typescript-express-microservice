import { IDatabaseConfig } from "./IDatabaseConfig";
import * as applicationConfig from "config"

export class DatabaseConfigProvider {

    static provide(): IDatabaseConfig {
        return {
            hostname: this.getHostname(),
            port: this.getPort(),
            hostnameAndPort: this.getHostname() + ":" + this.getPort(),
            username: this.getUsername(),
            password: this.getPassword(),
            database: this.getDatabase()
        }
    }

    private static getHostname(): string {
        if(process.env.MYSQL_HOST) {
            return process.env.MYSQL_HOST
        }
        if(applicationConfig.has("mysql.host")) {
            return applicationConfig.get("mysql.host")
        }
        throw "MYSQL.HOST is not configured."
    }

    private static getPort(): string {
        if(parseInt(process.env.MYSQL_PORT)) {
            return process.env.MYSQL_PORT
        }
        if(applicationConfig.has("mysql.port")) {
            return applicationConfig.get("mysql.port")
        }
        throw "MYSQL.PORT is not configured."
    }

    private static getUsername(): string {
        if(process.env.MYSQL_USER) {
            return process.env.MYSQL_USER
        }
        if(applicationConfig.has("mysql.user")) {
            return applicationConfig.get("mysql.user")
        }
        throw "MYSQL_USER is not configured."
    }

    private static getPassword(): string {
        if(process.env.MYSQL_PASSWORD) {
            return process.env.MYSQL_PASSWORD
        }
        if(applicationConfig.has("mysql.password")) {
            return applicationConfig.get("mysql.password")
        }
        throw "MYSQL_PASSWORD is not configured."
    }

    private static getDatabase(): string {
        if(process.env.MYSQL_DATABASE) {
            return process.env.MYSQL_DATABASE
        }
        if(applicationConfig.has("mysql.database")) {
            return applicationConfig.get("mysql.database")
        }
        throw "MYSQL_DATABASE is not configured."
    }
}