import { Router } from 'express';
import actions from './actions';

const { 
    createUser, 
    login, 
    ShowUserProfile,
    UpdateUserDetails,
    deleteUser,
  } = actions;
  
  const mainRouter = Router();
  
  mainRouter.post('/sign-up', createUser);
  mainRouter.post('/login', login);
  mainRouter.get('/users/:id', ShowUserProfile);
  mainRouter.put('/users/:id', UpdateUserDetails);
  mainRouter.delete('users/:id', deleteUser);



  export default mainRouter;