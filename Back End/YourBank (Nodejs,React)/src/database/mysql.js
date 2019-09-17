import mysql from 'mysql';
import mysqlConfigs from '../config/mysql';
import models from '../migrations/createTables';

const dbConfig = mysqlConfigs['dev'];
const { userCreateModel, CreditCardModel, CreateCreditOptionModel, TransactionModel, CreateDonationModel, DonateModel } = models;
const con = mysql.createConnection(dbConfig);


con.connect(() => {
  console.log('db connection is on');
  con.query(userCreateModel);
  con.query(CreditCardModel);
  con.query(CreateCreditOptionModel);
  con.query(TransactionModel);
  con.query(CreateDonationModel);
  con.query(DonateModel);

  
});

export default { con };