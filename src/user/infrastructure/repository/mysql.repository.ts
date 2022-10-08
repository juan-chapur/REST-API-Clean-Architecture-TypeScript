import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.shchema"

export class MySqlRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        // const user = await UserModel.findOne({uuid})
        // forma de buscar por id de MySQL
        // return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        // const user = await UserModel.create(userIn)
        // forma de crear de MySQL
        // return user
    }
    async listUser(): Promise<any> {
        // const user = await UserModel.find()
        // forma de buscar todos de MySQL
        // return user
    }
    
}