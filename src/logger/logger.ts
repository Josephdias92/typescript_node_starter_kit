import * as fs from "fs";
import * as winston from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";
import appConstants from "../constants/appConstants";
const dirLogs = appConstants.logger.outputPath;
if (!fs.existsSync(dirLogs)) {
    fs.mkdirSync(dirLogs);
}

const options = {
    combined: {
        datePattern: "YYYY-MM-DD",
        filename: `${dirLogs}/%DATE%-combined.log`,
        handleExceptions: true,
        level: appConstants.app.isProd ? "error" : "info",
        maxFiles: 12,
        maxSize: 5242880,
    },
    requestLog: {
        datePattern: "YYYY-MM-DD",
        filename: `${dirLogs}/%DATE%-activity.log`,
        level: "info",
        maxFiles: 12,
        maxSize: 5242880,
    },

};
export const combined = winston.createLogger({
    exitOnError: false,
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.printf((info) => {
            const ip = info.ip || "";
            const stack = info.stack && JSON.stringify(info.stack) || "";
            return `${info.timestamp} ${info.level} - ${ip} - ${info.message} - ${stack}`;
        }),
    ),
    transports: [
        new DailyRotateFile(options.combined),
    ],
});

export const requestLog = winston.createLogger({
    exitOnError: false,
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new DailyRotateFile(options.requestLog),
    ],
});

if (!appConstants.app.isProd) {
    combined.add(new winston.transports.Console());
}
