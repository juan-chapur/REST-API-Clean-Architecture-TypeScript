import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.shchema"

export class PostgresqlRepository implements UserRepository {
    async findUserById(uuid: string): Promise<any> {
        // const user = await UserModel.findByPk({uuid})
        // return user
    }
    async registerUser(userIn: UserEntity): Promise<any> {
        // const user = await UserModel.create(userIn)
        // return user
    }
    async listUser(): Promise<any> {
        // const user = await UserModel.findAll()
        // return user
    }
    
}