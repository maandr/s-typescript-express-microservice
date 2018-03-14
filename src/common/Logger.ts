class ConsoleLogger {

    level: LogLevel

    constructor(level: LogLevel = new LogLevel()) {
        this.level = level;
    }

    log(msg: string): void {
        if(this.level.debug) console.info(msg)
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

class LogLevel {
    debug: boolean = false
    info: boolean = false
    warning: boolean = false
    error: boolean = false

    constructor(level: string = "INFO") {
        switch(level) {
            case "DEBUG":
                this.debug = true
            case "INFO":
                this.info = true
            case "WARNING":
                this.warning = true
            case "ERROR":
                this.error = true
        }
    }
}

export const logger = new ConsoleLogger(new LogLevel("DEBUG"))