import express from 'express';
const router = express.Router();
import { createUserController,UpdateUserController,DeleteUserController,getUserController } from '../controllers/createusercontroller.js';
router.route("").get(getUserController);
router.route("/:id").get(getUserController);

router.route("").post(createUserController);
router.route("/:id").put(UpdateUserController);
router.route("/:id").delete(DeleteUserController);
export default router;