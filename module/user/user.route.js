import { Router } from "express"
import { createUserController } from "./user.controller.js"
import { validateUser } from "./user.validate.js"

const router = Router();

router.post("/register", validateUser, createUserController);


export default router;
    