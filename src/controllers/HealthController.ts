import { Controller, Get, HttpCode } from "routing-controllers"

@Controller("/health")
export class HealthController {

    @HttpCode(200)
    @Get("/")
    getHealth() {
        return "OK"
    }
}