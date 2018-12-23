import * as express from "express";
import auth from "../auth/auth";
import LocationConstant from "../constants/locationConstant";
import UserController from "../controller/userController";
import Utils from "../utils/utils";

const routes = express.Router();
const userController = new UserController();
routes.post(LocationConstant.USERS, auth.authorization, Utils.wrapAsync(userController.addUser));
routes.get(LocationConstant.USERS, auth.authorization, Utils.wrapAsync(userController.getAllUsers));
routes.get(LocationConstant.USERS_BY_ID, auth.authorization, Utils.wrapAsync(userController.getById));
routes.put(LocationConstant.USERS_BY_ID, auth.authorization, Utils.wrapAsync(userController.updateUser));

export default routes;
