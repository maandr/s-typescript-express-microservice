import * as app from "../../src/main"
import * as supertest from "supertest"
import { logger } from "../../src/common/Logger"

export abstract class AbstractControllerTest {

    private static server: any = null
    private static apiClient: any = null

    protected apiClient: any = AbstractControllerTest.apiClient
    protected logger: any = logger

    protected static before() {
        AbstractControllerTest.server = app.default.express.app.listen(() => {})
        AbstractControllerTest.apiClient = supertest.agent(AbstractControllerTest.server)
        logger.debug("Test server successfully started.")
    }

    protected static after() {
        AbstractControllerTest.server.close()
        logger.debug("Test server successfully teared down.")
    }
}