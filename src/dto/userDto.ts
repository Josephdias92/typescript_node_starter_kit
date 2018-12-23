export default class UserDto {
    public id?: number;
    public userName: string;
    public firstName: string;
    public lastName: string;
    public address: string;

    constructor(entity) {
        this.id = entity.id;
        this.firstName = entity.firstName;
        this.lastName = entity.lastName;
        this.userName = entity.userName;
        this.address = entity.address;
    }

    public toEntity(exclude = []) {
        const entity = {};
        return entity;
    }
}
