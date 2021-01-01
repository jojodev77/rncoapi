const model = require("../../models");
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const jwtKey = "my_secret_key"
const jwtExpirySeconds = 300



const createUser = async (req, res) => {
    try {
      const user = await model.User.create(req.body);
      return res.status(201).json({
        user
      });
    } 
    
    catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const getUserByEmail_Password = async (req, res) => {
    try {
      //const { email } = req.params;
      model.User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      })
        .then(user => {
          if (!user) {
            return res.status(404).send( "User Not found.");
          }
    
            res.status(200).send({
              user
            });
          })
        .catch(err => {
          res.status(500).send({err });
        })}
    catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const getAllUser = async (req, res) => {
    try {
      model.User.findAll().then(user => {
        if (!user) {
          return res.status(404).send( "User Not found.");
        }
        res.status(200).send({
          user
        });
      })
    } catch (error) {
      return error
    }
  }

  const deleteUser = async (req, res) => {
    try {
      //const { email } = req.params;
      model.User.destroy({
        where: {
          email: req.body.id,
        }
      })
        .then(user => {
          if (!user) {
            return res.status(404).send( "User Not found.");
          }
    
            res.status(200).send({
              user
            });
          })
        .catch(err => {
          res.status(500).send({err });
        })}
    catch (error) {
      return res.status(500).send(error.message);
    }
  };

  

const authWithToken = async (req, res) => {
  try {
    //const { email } = req.params;
    model.User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send( "User Not found.");
        }
        let jwtToken = jwt.sign({
          email: user.email,
      }, "longer-secret-is-better", {
          expiresIn: "1h"
      });

       

          res.status(200).send({
             jwtToken,
            user
            
            
          });
        })
     }
  catch (error) {
    return res.status(500).send(error.message);
  }
}


 
module.exports = {
    createUser,
    getUserByEmail_Password,
    getAllUser,
    deleteUser,
    authWithToken
}

