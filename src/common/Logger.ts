class ConsoleLogger {

    log(msg: string): void {
        console.log(msg)
    }

    info(msg: string): void {
        console.info(msg)
    }

    error(msg: string): void {
        console.error(msg)
    }
}

export const logger = new ConsoleLogger()