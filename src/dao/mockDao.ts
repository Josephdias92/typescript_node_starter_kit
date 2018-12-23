import * as fs from "fs";
import * as path from "path";
import { combined } from "../logger/logger";
import Utils from "../utils/utils";

export default class Dao {
    private static pool;
    protected tableName;
    private mockData: any;

    constructor() {
        this.mockData = JSON.parse(fs.readFileSync(
            path.join(__dirname, "..", "resources", "mockData", "index.json"), "utf-8"));
    }

    public async find<T>(fields = [], where?: any): Promise<T[]> {
        try {
            let data = this.mockData[this.tableName].map((field: any) => {
                if (!Utils.isEmptyArray(field)) {
                    const selectedFields = fields.reduce((acc, cur) => {
                        acc[cur] = field[cur];
                        return acc;
                    }, {});
                    return selectedFields;
                } else {
                    return field;
                }
            });
            if (!Utils.isEmptyObject(where)) {
                const keys = Object.keys(where);
                data = data.filter((query: { [x: string]: any; }) => {
                    return keys.every((key) => {
                        return query[key] === where[key];
                    });
                });
            }
            return Promise.resolve(data);
        } catch (error) {
            combined.error(error);
            return Promise.reject(error);
        }
    }

    public async findOne<T>(fields = [], where: any): Promise<T> {
        try {
            return this.find(fields, where)[0];
        } catch (error) {
            combined.error(error);
            return Promise.reject(error);
        }
    }

    public async findById<T>(id: number, select?): Promise<T> {
        return this.findOne<T>(select, { id });
    }

    public async updateById<T>(id, data): Promise<T> {
        const updated = await this.update<T>(data, { id: Number(id) });
        return updated[0];
    }

    public async update<T>(data: any, where: any): Promise<T[]> {
        try {
            const keys = Object.keys(where);
            const len = this.mockData[this.tableName].length;
            const foundObjects = [];
            for (let i = 0; i < len; i++) {
                const query = this.mockData[this.tableName][i];
                const found = keys.every((key) => {
                    return query[key] === where[key];
                });
                const modified = { ...query, ...data };
                this.mockData[this.tableName][i] = modified;
                foundObjects.push(modified);
            }
            return Promise.resolve(foundObjects);
        } catch (error) {
            combined.error(error);
            return Promise.reject(error);
        }
    }

    public async insert<T extends IdProperty>(objectToInsert: T): Promise<T> {
        try {
            objectToInsert.id = this.mockData[this.tableName].length + 1;
            this.mockData[this.tableName].push(objectToInsert);
            return Promise.resolve(objectToInsert);
        } catch (error) {
            combined.error(error);
            return Promise.reject(error);
        }
    }
}

interface IdProperty {
    id: number;
}
