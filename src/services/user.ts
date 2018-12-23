import localeService from "../core/localeService";
import userDao from "../dao/userDao";
import NotFoundException from "../exceptions/notFoundException";
import { combined } from "../logger/logger";
import Utils from "../utils/utils";

export default class UserService {
    public async update(id: number, body: any): Promise<any> {
        const data  = await userDao.updateById(id, body);
        if (!Utils.isEmptyObject(data)) {
            return data;
        } else {
            throw new NotFoundException(localeService.translate("idNotFound"));
        }
    }

    public async addUser(data) {
        if (!Utils.isEmptyObject(data)) {
            return await userDao.insert(data);
        } else {
            throw new NotFoundException(localeService.translate("idNotFound"));
        }
    }

    public async get(id) {
        try {
            const data  = await userDao.findById(id);
            if (!Utils.isEmptyObject(data)) {
                return data;
            } else {
                throw new NotFoundException(localeService.translate("idNotFound"));
            }
        } catch (error) {
            combined.error(error);
            throw error;
        }
    }

    public async getList(query) {
        try {
            const data  = await userDao.find([], query);
            return data;
        } catch (error) {
            combined.error(error);
            throw error;
        }
    }
}
