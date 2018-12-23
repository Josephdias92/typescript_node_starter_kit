import * as express from "express";
import * as morgan from "morgan";
import * as swaggerUi from "swagger-ui-express";
import auth from "./auth/auth";
import { combined, requestLog } from "./logger/logger";
import * as swaggerUserDoc from "./resources/swagger/swagger.json";
import userRoute from "./routes/userRoute";

class App {
    public express;
    constructor() {
        this.express = express();
        this.setUpMiddleware();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        this.express.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerUserDoc));
        this.express.use("/api/v1/", auth.basic);
        this.express.use("/api/v1/", userRoute);
        this.express.use((err, req, res, next) => {
            res.status(err.statusCode || 500).send(err.errorMessage || err.message);
            combined.error(JSON.stringify(err.errorMessage || err.message), { stack: err.stack, ip: req.ip});
            next();
        });
    }

    private setUpMiddleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({extended: true}));
        this.express.use(morgan("combined", {
            stream: {
              write:  (log) => {
                requestLog.info(log.trim());
              },
            },
          }));
        process.on("unhandledRejection", (err) => {
            combined.error(JSON.stringify(err.errorMessage), { stack: err.stack, type: err.exceptionType });
            throw err;
        });
    }
}
export default new App().express;
