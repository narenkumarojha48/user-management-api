import express from 'express';
const router = express.Router();
import { createUserController,UpdateUserController,DeleteUserController,getUserController } from '../controllers/createusercontroller.js';
router.route("").get(getUserController);
router.route("").post(createUserController);
router.route("").put(UpdateUserController);
router.route("").delete(DeleteUserController);
export default router;