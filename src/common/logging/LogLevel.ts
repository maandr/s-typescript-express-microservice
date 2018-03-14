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