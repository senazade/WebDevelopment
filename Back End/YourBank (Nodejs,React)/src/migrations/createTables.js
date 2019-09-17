const userCreateModel = `
  CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phonenumber VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    creditcard INT(11),
    credit_option VARCHAR(3),
    country VARCHAR(3),
    salt VARCHAR(255),
    created_at DATE,
    update_at DATE,
    deleted_at DATE,
    PRIMARY key (id)
  )
`;

const CreditCardModel = `
  CREATE TABLE IF NOT EXISTS creditcards (
      id INT(11) NOT NULL AUTO_INCREMENT,
      name VARCHAR(45) NOT NULL,
      type VARCHAR(10) NOT NULL,
      number INT(12) NOT NULL,
      balance INT(20),
      expiration DATE,
      svss INT(3) NOT NULL,
      created_at DATE,
      PRIMARY key (id)
  )
`;

const CreateCreditOptionModel = `
CREATE TABLE IF NOT EXISTS credit_givers (
      id INT(11) NOT NULL AUTO_INCREMENT,
      name VARCHAR(25) NOT NULL,
      credit_amount INT(25) NOT NULL,
      timeframe INT(11) NOT NULL,
      interest INT(3) NOT NULL,
      PRIMARY key (id)
)
`;

const TransactionModel = `
CREATE TABLE IF NOT EXISTS transactions_made (
      id INT(11) NOT NULL AUTO_INCREMENT,
      sendTo INT(11) NOT NULL,
      amount INT(10) NOT NULL,
      created_at DATE,
      PRIMARY key (id)
)
`;

const CreateDonationModel = `
CREATE TABLE IF NOT EXISTS Donations (
      id INT(11) NOT NULL AUTO_INCREMENT,
      institution_name VARCHAR(45) NOT NULL,
      address VARCHAR(25) NOT NULL,
      budget INT(11) NOT NULL,
      transaction_number INT(12) NOT NULL,
      PRIMARY key (id)
)
`;

const DonateModel = `
CREATE TABLE IF NOT EXISTS Donate (
  id INT(11) NOT NULL AUTO_INCREMENT,
  transaction_number INT(12) NOT NULL,
  amount INT(12) NOT NULL,
  PRIMARY key (id)
)
`;

export default {
    userCreateModel,
    CreditCardModel,
    CreateCreditOptionModel,
    TransactionModel,
    CreateDonationModel,
    DonateModel
}
