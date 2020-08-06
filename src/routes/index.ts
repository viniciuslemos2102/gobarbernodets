import { Router } from 'express';
import appointmentsRouter from './appointments.route';
import userRouter from './users.route';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', userRouter);

export default routes;
