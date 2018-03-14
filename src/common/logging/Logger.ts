import * as applicationConfig from "config"
import { LogLevel } from "./LogLevel"

export class ConsoleLogger {

    level: LogLevel

    constructor(level: LogLevel = null) {
        this.level = (level != null) 
            ? level
            : applicationConfig.get("logging.level")
    }

    info(msg: string): void {
        if(this.level.info) console.info(msg)
    }

    warning(msg: string): void {
        if(this.level.warning) console.warn(msg)
    }

    error(msg: string): void {
        if(this.level.error) console.error(msg)
    }

    debug(msg: string): void {
        if(this.level.debug) console.debug(msg)
    }
}

export const logger = new ConsoleLogger()