import database from '../database/mysql';

const { con } = database;


const createCreditCard = async (req, res, next) => {
  const {
    name,
    type, 
    number, 
    expiration,
    svss
  }: {
    name: String,
    type: String,
    number: String,
    expiration: String,
    svss: String
  } = req.body;

  const createAt = new Date(Date.now());

  try {
    const createNewCreditCard = 'INSERT INTO creditcards (name, type, number, expiration, svss) VALUES (?,?,?,?,?)';
    con.query(createNewCreditCard, [name, type, number, expiration, svss], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
        const JoinCreditCard = 'UPDATE users SET creditcard = ? WHERE name = ?';
        con.query(JoinCreditCard, [number, name], (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        });
      }
    });

    res.status(201).send({ success: true, message: 'New credit card was created', data: {name, type, number, expiration, svss} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
  
  await next;
}

const createCreditOption = async (req, res, next) => {
  const {
    name,
    credit_amount,
    timeframe, 
    interest
  }: {
    name: String,
    credit_amount: String,
    timeframe: String,
    interest: String
  } = req.body;

  const createAt = new Date(Date.now());

  try {
    const createNewCreditOption = 'INSERT INTO credit_givers (name, credit_amount, timeframe, interest) VALUES (?,?,?,?)';
    con.query(createNewCreditOption, [name, credit_amount, timeframe, interest], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
        };
    });

    res.status(201).send({ success: true, message: 'Credit was created', data: {name, credit_amount, timeframe, interest} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
  
  await next;
}

function listAllCreditGivers() {
  return new Promise((resolve, reject) => {
    const listCreditGivers = 'SELECT * FROM credit_givers'; 
    con.query(listCreditGivers, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
    };
  });
})};


const listOfAllCreditGivers = async (req, res, next) => {
  try {
    const CreditGivers: Array = await listAllCreditGivers();
    res.status(200).send({ success: true, message: 'A list of all Credit Givers:', body: CreditGivers });
  } catch (error) {
      res.status(500).send({ success: false, message: 'internal server error'});
    }
  await next;
}


function searchCreditByName(name) {
  return new Promise((resolve, reject) => {
    const searchByName = 'SELECT * FROM credit_givers WHERE name = ?';
    con.query(searchByName, [name], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
    };
  });
})};

const CreditsByName = async (req, res, next) => {
    const { name } : { name : string } = req.params;
    try {
      const CreditsByName: Array = await searchCreditByName(name);
      res.status(200).send({ success: true, message: `Credits by the name ${name} are:`, body: CreditsByName });
    } catch (error) {
      res.status(500).send({ success: false, message: `internal server error`});
    }
    await next;
}


function searchCreditByAmount(credit_amount) {
  return new Promise((resolve, reject) => {
    const searchByAmount = 'SELECT * FROM credit_givers WHERE credit_amount <= ?';
    con.query(searchByAmount, Number[(credit_amount)], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
    };
  });
})};

const CreditsByAmount = async (req, res, next) => {
  const { credit_amount } : { credit_amount : string } = req.params;
  try {
    const CreditByAmount: Array = await searchCreditByAmount(credit_amount);
    res.status(200).send({ success: true, message: `Credits with the amount of ${credit_amount} are:`, body: CreditByAmount });
  } catch (error) {
    res.status(500).send({ success: false, message: `internal server error`});
  }
  await next;
}


const CreateTransaction = async (req, res, next) => {
  const {
    amount,
    sendTo
  }: {
    amount: String,
    sendTo: String
  } = req.body;

  const createAt = new Date(Date.now());

  try {
    const MakeATranscation = 'INSERT INTO transactions_made (amount, sendTo) VALUES (?,?)';
    con.query(MakeATranscation, [amount, sendTo], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        const AddTheAmount = 'UPDATE creditcards SET balance = ?, balance = balance + balance WHERE number = ?';
        con.query(AddTheAmount, [amount, sendTo], (err, results) => {
          if (err) {
            console.error(err); 
          } else {
            console.log(results);
          }
        });
      }
    });

    res.status(201).send({ success: true, message: 'The transaction was successful', data: {sendTo, amount} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
  
  await next;
}


const CreateDonation = async (req, res, next) => {
  const {
    institution_name,
    country,
    address,
    budget,
    transaction_number
  }: {
    institution_name: String,
    country: String,
    address: String,
    budget: String,
    transaction_number: String
  } = req.body;

  const createAt = new Date(Date.now());

  try {
    const MakeADonation = 'INSERT INTO Donations (institution_name, country, address, budget, transaction_number) VALUES (?,?,?,?,?)';
    con.query(MakeADonation, [institution_name, country, address, budget, transaction_number], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    });

    res.status(201).send({ success: true, message: 'Successfully created a donation', data: {institution_name, country, address, budget, transaction_number} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
  
  await next;
}


const DonateToInstitution = async (req, res, next) => {
  const {
    amount,
    transaction_number
  }: {
    amount: String,
    transaction_number: String
  } = req.body;

  const createAt = new Date(Date.now());

  try {
    const DonateToInstitution = 'INSERT INTO Donate (amount, transaction_number) VALUES (?,?)';
    con.query(DonateToInstitution, [amount, transaction_number], (err, results) => {
      if (err) {
        console.error(err);
      } else {
        const AddTheAmount = 'UPDATE donations SET budget = ?, budget = budget + budget WHERE transaction_number = ?';
        con.query(AddTheAmount, [amount, transaction_number], (err, results) => {
          if (err) {
            console.error(err); 
          } else {
            console.log(results);
          }
        });
      }
    });
    
    res.status(201).send({ success: true, message: 'Successfully created a donation', data: {amount, transaction_number} });
  } catch (error) {
    res.status(500).send({ success: false, message: 'Server error' });
  }
  
  await next;
}





export default {
    createCreditCard,
    createCreditOption,
    listOfAllCreditGivers,
    CreateTransaction,
    CreditsByName,
    CreditsByAmount,
    CreateDonation,
    DonateToInstitution
}