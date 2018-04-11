import { ConfigService } from "../../services/config.service";

export interface ILogger {
    
}

export class ConsoleLogger {

    constructor(
        private configService: ConfigService = new ConfigService(),
        private level: LogLevel = null
    ) {
        this.level = (level) 
            ? level
            : new LogLevel(this.configService.get("logging.level"))
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

export class LogLevel {

    static DEBUG: string = "DEBUG"
    static INFO: string = "INFO"
    static WARNING: string = "WARNING"
    static ERROR: string = "ERROR"

    debug: boolean = false
    info: boolean = false
    warning: boolean = false
    error: boolean = false

    constructor(level: string = LogLevel.INFO) {
        switch(level) {
            case LogLevel.DEBUG:
                this.debug = true
            case LogLevel.INFO:
                this.info = true
            case LogLevel.WARNING:
                this.warning = true
            case LogLevel.ERROR:
                this.error = true
        }
    }
}

export const logger = new ConsoleLogger()