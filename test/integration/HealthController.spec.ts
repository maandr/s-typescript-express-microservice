import { AbstractControllerTest } from "./AbstractControllerTest"
import { suite, test } from "mocha-typescript"
import { expect } from "chai"

@suite("HealthController")
class HealthControllerTest extends AbstractControllerTest {

    @test("GET /api/health")
    should_response_ok() {
        this.apiClient.get("/api/health")
            .expect(200)
    }
}