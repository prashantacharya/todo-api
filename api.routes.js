import { Router } from 'express';
import userRouter from './routes/user.router';
import authRouter from './routes/auth.router';
import todoRouter from './routes/todo.router';

const apiRouter = Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/todos', todoRouter);

export default apiRouter;
