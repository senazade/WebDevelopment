import { Router } from 'express';
import actions from './actions';

const { 
    createCreditCard, 
    createCreditOption,
    listOfAllCreditGivers,
    CreateTransaction,
    CreditsByName,
    CreditsByAmount,
    CreateDonation,
    DonateToInstitution
  } = actions;
  
  const mainRouter = Router();

  mainRouter.post('/create-creditcard', createCreditCard);
  mainRouter.post('/create-credit', createCreditOption);
  mainRouter.get('/credit-givers', listOfAllCreditGivers);
  mainRouter.get('/credit-givers/:name', CreditsByName);
  mainRouter.get('/credit-givers/:amount', CreditsByAmount);
  mainRouter.post('/create-transaction', CreateTransaction);
  mainRouter.post('/create-donation', CreateDonation);
  mainRouter.post('/donate', DonateToInstitution);


  export default mainRouter;