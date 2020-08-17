import { Router } from 'express';
import login from '../controller/login.controller';

const authRouter = Router();

authRouter.post('/login', login);

export default authRouter;
