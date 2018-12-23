export default class Utils {
    public static isDefAndNotNull(val: any): boolean {
        return val !== undefined && val !== null;
    }

    public static isString(val: any): boolean {
        return this.getType(val) === "String";
    }

    public static randomString(len = 10): string {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        let randomstring = "";
        for (let i = 0; i < len; i++) {
            const rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        return randomstring;
    }

    public static isEmptyArray(arr: any[]): boolean {
        return !(arr && arr.length);
    }

    public static isEmptyObject(obj): boolean {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    public static getType(dataType) {
        return Object.prototype.toString.call(dataType).slice(8, -1);
    }

    public static isNumber(val) {
        return !Number.isNaN(val);
    }

    public static wrapAsync = (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }

    /**
     * @description Deep copy for Serialable Object
     * @param data Array or Object which are serialable
     * @returns Deep copy of data
     */
    public static deepCopy<T>(target: T): T {
        return JSON.parse(JSON.stringify(target));
    }
}
