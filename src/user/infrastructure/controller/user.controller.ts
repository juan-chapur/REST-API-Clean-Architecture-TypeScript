import { Request, Response } from "express";
import { UserUseCase } from "../../application/userUseCase";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.insertController = this.insertController.bind(this)
    this.getController = this.getController.bind(this)
    this.getUsersController = this.getUsersController.bind(this)
  }

  public async insertController({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  }

  public async getController({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const user = await this.userUseCase.getDetailUser(`${uuid}`);
    res.send({ user });
  }

  public async getUsersController(req:Request, res:Response){
    const users = await this.userUseCase.listUsers();
    res.send(users);
  }
}
