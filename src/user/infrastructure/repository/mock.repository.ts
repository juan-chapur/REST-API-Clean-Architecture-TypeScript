import { UserEntity } from "../../domain/user.entity";
import { UserRepository } from "../../domain/user.repository";

const MOCK_USER = {
    name: "juan",
    uuid: "511b1e71-adf6-4fdb-a921-d3f1b29fff21"
  };

export class MockRepository implements UserRepository {
  async findUserById(uuid: string): Promise<any> {
    const user = MOCK_USER
    return user;
  }
  async registerUser(userIn: UserEntity): Promise<any> {
    const user = MOCK_USER
    return user;
  }
  async listUser(): Promise<any> {
    const users = [MOCK_USER, MOCK_USER, MOCK_USER]
    return users;
  }
}
