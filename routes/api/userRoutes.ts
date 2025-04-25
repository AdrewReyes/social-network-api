import { Router } from 'express';
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController.js';

const userRouter = Router();

userRouter.route('/').get(getUsers).post(createUser);

userRouter
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

userRouter.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export { userRouter };