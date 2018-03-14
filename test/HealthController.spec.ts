import * as server from "../src/main"
import * as request from "supertest"
import { expect } from "chai"

describe("HealthController", () => {
    it("should respond 200 OK", (done) => {
        request(server.default.express.app)
            .get("/api/health")
            .expect(200, done)
    })
})