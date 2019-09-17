import database from '../database/mysql';
import Bluebird from 'bluebird';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';

const { con } = database;

Bluebird.promisifyAll(jwt);
Bluebird.promisifyAll(bcrypt);

const createUser = async (req, res, next) => {
    const {
      name,
      username, 
      email, 
      phonenumber,
      password
    }: {
      name: String,
      username: String,
      email: String,
      phonenumber: String,
      password: String
    } = req.body;

    console.log(req.body)
  
    const salt = bcrypt.genSaltSync(10)
    const getRounds = bcrypt.getRounds(salt); 
    const passHash = bcrypt.hashSync(password, getRounds);
  
    const createAt = new Date(Date.now());
    
    try {
      const createNewUser = 'INSERT INTO users (name, username, email, phonenumber, password, salt, created_at) VALUES (?,?,?,?,?,?,?)';
      con.query(createNewUser, [name, username, email, phonenumber, passHash, salt, createAt], (err, results) => {
        if (err) {
          console.error(err);
        }
        console.log(results);
      });
      res.status(201).send({ success: true, message: 'New user was successfully created', data: {name, username, email, phonenumber, password} });
    } catch (error) {
      res.status(500).send({ success: false, message: 'Server error' });
    }
    
    await next;
  }

  const login = async(req, res, next) => {
    const { email, password }: { email: string, password: string } = req.body;

    const userWithEmail = 'SELECT * FROM users WHERE email = ?';
    return con.query(userWithEmail, email, (err, results) => {
      if (err) {
        console.error(err);
      }
        const user = results.find(emailObj => emailObj.email === email);
      if (results && results.length && user.email) {
        const matchPassword: boolean = bcrypt.compareSync(password, user.password);
        if (matchPassword) {
          delete user.password;
          delete user.salt;
          const userId = user.id;
          const token = jwt.sign({ user }, 'aaaa', { expiresIn: '1h'});

          res.status(200).send({message: 'Logged in', token: token});
        } else {
          res.status(403).send('Password is not correct');
        }
      } else {
        res.status(404).send(`User with email ${email} not found!`);
      }
    });
    await next;
  }


      const ShowUserProfile = async(req, res, next) => {
        const { id }: { id: String } = req.params;
        
        const listUsers = 'SELECT * FROM users';
        return con.query(listUsers, (err, results) => {
          if (err) {
            console.error(err);
          }
          const users = results;
          const usersIds = users.map(user => user.id);
      
          if (usersIds.includes(Number(id))) {
            const SelectUsersById = 'SELECT name, username, email, phonenumber, password, credit_option, country, creditcard FROM users WHERE id = ?';
             return con.query(SelectUsersById, [Number(id)], (err, results, fields) => {
              if (err) {
                console.error(err);
              }
              res.status(200).send(results);
            });
          } else {
            res.status(404).send(`User with id ${id} does not exist. Please try again`);
          }
        });
      
        await next;
      }
    
      const UpdateUserDetails = async(req, res, next) => {
        const { id }: { id: string } = req.params;
        const {
          name,
          username,
          email,
          phonenumber,
          password,
        }: {
          name: ?String,
          username: String,
          email: String,
          phonenumber: String,
          password: ?String,
        } = Object.assign({}, req.body);
      
        const userId = req.body.id;
        if (userId) {
          res.status(403).send(`Id ${id} should not be overwritten`);
        } else {
          if (password && password.length) {
            const salt = bcrypt.genSaltSync(10);
            const getRounds = bcrypt.getRounds(salt);
            const passHash = bcrypt.hashSync(password, getRounds);
            
            const updateUserDetails = 'UPDATE users SET name = ?, username = ?, email = ?, phonenumber = ?, password = ? WHERE id = ?';
            return con.query(updateUserDetails, [name, username, email, phonenumber, passHash, Number(id)], (err, results) => {
              if (err) {
                console.error(err);
              }
              res.status(204).send(results);
              console.log(results);
            });
          
          } else {
            res.status(404).send('You must have a password');
          }
        }
        await next;
      }
    
      const deleteUser = async(req, res, next) => {
        const { id }: { id: string } = req.params;
        const deleteUserById = 'DELETE FROM users WHERE id = ?';
        return con.query(deleteUserById, parseInt(id), (err, results) => {
          if (err) {
            res.status(500).send(`There was a problem deleting the user.`);
          }
          res.status(202).send(`User with id ${id} is removed.`);
        });
      
        await next;
      }

  export default {
      createUser,
      login,
      ShowUserProfile,
      UpdateUserDetails,
      deleteUser
  }