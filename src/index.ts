import * as dotenv from "dotenv";
dotenv.config();
import * as fs from "fs";
import * as https from "https";
import appConstants from "./constants/appConstants";

const requiredEnv = ["NODE_ENV", "SSL_CERT", "SSL_KEY", "LOG_PATH",
"DB_HOSTNAME", "DB_PORT", "DB_NAME", "DB_USERID", "DB_PASSWORD"];
const unsetEnv = requiredEnv.filter((env) => {
    return !(typeof process.env[env] !== "undefined");
});
if (unsetEnv.length > 0) {
    const errorString = `Required ENV variables are not set: [${ unsetEnv.join(", ") }]`;
    throw new Error(errorString);
}

const options = {
    cert: fs.readFileSync(process.env.SSL_CERT),
    key: fs.readFileSync(process.env.SSL_KEY),
};
// so that logger doesnt get initialized
import app from "./app";
const PORT = process.env.PORT || 3000;
if (!appConstants.app.isProd) {
    app.listen(PORT);
}
https.createServer(options, app).listen(process.env.SSL_PORT || 8443);
