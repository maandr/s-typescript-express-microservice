import * as app from "../src/main"
import * as supertest from "supertest"
import { expect } from "chai"

describe("HealthController", () => {

    let server: any = null
    let apiClient: any = null

    before((done) => {
        server = app.default.express.app.listen(done)
        apiClient = supertest.agent(server)
    })

    after((done) => {
        server.close(done)
    })

    it("should respond 200 OK", (done) => {
        apiClient.get("/api/health")
            .expect(200, done)
    })
})