import HttpStatusCode from "../constants/HttpStatusCode";
import { combined } from "../logger/logger";
import UserService from "../services/user";

export default class UserController {
    public async getAllUsers(req, res, next) {
        try {
            const userService = new UserService();
            const data = await userService.getList(req.query);
            res.status(HttpStatusCode.OK).json(data);
        } catch (error) {
            combined.error(`Error occured while listing failed request ${JSON.stringify(error)}`);
            next(error);
        }
    }

    public async getById(req, res, next) {
        try {
            const userService = new UserService();
            const failedRequest = await userService.get(req.params.id);
            res.status(HttpStatusCode.OK).json(failedRequest);
        } catch (error) {
            next(error);
        }
    }

    public async updateUser(req, res, next) {
        try {
            const userService = new UserService();
            const user = await userService.update(req.params.id, req.body);
            res.status(HttpStatusCode.OK).json(user);
        } catch (error) {
            next(error);
        }
    }

    public async addUser(req, res, next) {
        try {
            const userService = new UserService();
            const user = await userService.addUser(req.body);
            res.status(HttpStatusCode.OK).json(user);
        } catch (error) {
            next(error);
        }
    }
}
