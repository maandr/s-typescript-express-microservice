import { logger } from '../logging/logger'
import { ConfigurationError } from '../../services/config.service'
import * as applicationConfig from 'config'

export interface IDatabaseConfig {
    host: string
    port: string
    hostAndPort: string
    username: string
    password: string
    database: string
}

export class DatabaseConfigProvider {

    static provide(): IDatabaseConfig {
        return {
            host: this.getHost(),
            port: this.getPort(),
            hostAndPort: this.getHost() + ':' + this.getPort(),
            username: this.getUsername(),
            password: this.getPassword(),
            database: this.getDatabase()
        }
    }

    private static getHost(): string {
        if(process.env.MYSQL_HOST) {
            return process.env.MYSQL_HOST
        }
        if(applicationConfig.has(YML_MYSQL_HOST)) {
            return applicationConfig.get(YML_MYSQL_HOST)
        }
        logger.warning(`
            Mysql host is not configured. Falling back to default '${MYSQL_DEFAULT_HOST}'.
            Make sure you either specified '${YML_MYSQL_HOST}' in the config/${process.env.NODE_ENV}.yml,
            or specify the environment variable 'MYSQL_HOST' in order to configure it.`
        )
        return MYSQL_DEFAULT_HOST
    }

    private static getPort(): string {
        if(parseInt(process.env.MYSQL_PORT)) {
            return process.env.MYSQL_PORT
        }
        if(applicationConfig.has(YML_MYSQL_PORT) && parseInt(applicationConfig.get(YML_MYSQL_PORT))) {
            return applicationConfig.get(YML_MYSQL_PORT)
        }
        logger.warning(`
            Mysql port is not configured. Falling back to default '${MYSQL_DEFAULT_PORT}'.
            Make sure you either specified '${YML_MYSQL_PORT}' in the config/${process.env.NODE_ENV}.yml,
            or specified the environment variable 'MYSQL_PORT' in order to configure it.
        `)
        return MYSQL_DEFAULT_PORT
    }

    private static getUsername(): string {
        if(process.env.MYSQL_USERNAME) {
            return process.env.MYSQL_USERNAME
        }
        if(applicationConfig.has(YML_MYSQL_USERNAME)) {
            return applicationConfig.get(YML_MYSQL_USERNAME)
        }
        throw new ConfigurationError(`
            Mysql username is not configured.
            Make sure you either specified '${YML_MYSQL_USERNAME}' in the config/${process.env.NODE_ENV}.yml,
            or specified the environment variable 'MYSQL_USERNAME' in order to configure it.
        `)
    }

    private static getPassword(): string {
        if(process.env.MYSQL_PASSWORD) {
            return process.env.MYSQL_PASSWORD
        }
        if(applicationConfig.has(YML_MYSQL_PASSWORD)) {
            return applicationConfig.get(YML_MYSQL_PASSWORD)
        }
        throw new ConfigurationError(`
            Mysql password is not configured.
            Make sure you either specified '${YML_MYSQL_PASSWORD}' in the config/${process.env.NODE_ENV}.yml,
            or specified the environment variable 'MYSQL_PASSWORD' in order to configure it.
        `)
    }

    private static getDatabase(): string {
        if(process.env.MYSQL_DATABASE) {
            return process.env.MYSQL_DATABASE
        }
        if(applicationConfig.has(YML_MYSQL_DATABASE)) {
            return applicationConfig.get(YML_MYSQL_DATABASE)
        }
        throw new ConfigurationError(`
            Mysql database is not configured.
            Make sure you either specified '${YML_MYSQL_DATABASE}' in the config/${process.env.NODE_ENV}.yml,
            or specified the environment variable 'MYSQL_DATABASE' in order to configure it.
        `)
    }
}

const YML_MYSQL_HOST: string = 'mysql.host'
const YML_MYSQL_PORT: string = 'mysql.port'
const YML_MYSQL_USERNAME: string = 'mysql.username'
const YML_MYSQL_PASSWORD: string = 'mysql.password'
const YML_MYSQL_DATABASE: string = 'mysql.database'

const MYSQL_DEFAULT_HOST: string = 'localhost'
const MYSQL_DEFAULT_PORT: string = '3306'
