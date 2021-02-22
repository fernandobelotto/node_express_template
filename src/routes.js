import { Router } from 'express';

import UserController from './controllers/UserController.js'

const router = Router();

router.post('/', UserController.addUser);
router.get('/', UserController.findUsers);
router.get('/:id', UserController.findUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUserById);

export default router