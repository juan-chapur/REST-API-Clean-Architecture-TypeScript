import { Router } from "express";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";
import { MockRepository } from "../repository/mock.repository";
import { MySqlRepository } from "../repository/mysql.repository";
import { PostgresqlRepository } from "../repository/postgresql.repository";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router()
/* *
 * Iniciar Repository
 */
const userRepo = new MongoRepository()

/**
 * Iniciar casos de uso
 */

const userUseCase = new UserUseCase(userRepo)

/**
 * Iniciar User Controller
 */

const userController = new UserController(userUseCase)

route.post("/user", userController.insertController)
route.get("/user", userController.getController)
route.get("/user/list", userController.getUsersController)

export default route