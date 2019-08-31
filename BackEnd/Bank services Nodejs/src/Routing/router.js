import { Router } from 'express';
import users from '../User/index';
import credits from '../Credit/index';


const mainRouter = Router();

mainRouter.use(users.routes);
mainRouter.use(credits.routes);



export default mainRouter;