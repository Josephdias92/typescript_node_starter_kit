import Dao from "./mockDao";

class UserDao extends Dao {
    constructor() {
        super();
        this.tableName = "users";
    }
}
export default new UserDao();
