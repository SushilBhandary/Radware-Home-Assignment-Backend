const express = require("express");
const {
  getAllAccount,
  creatAccount,
  getAccountByID
} = require('../controllers/accounts.controllers')
const {
  getAlluser,
  getUserById,
  createUser
} = require('../controllers/users.controllers')
const router = express.Router();

//Testing
router.get('/api/isAlive', (req, res) => {
    res.json({
        alive : true ,
        Message: "Alive"
    })
});

// Get all accounts
router.get('/api/accounts', getAllAccount);

// Get account by ID
router.get('/api/accounts/:id',getAccountByID);

// Create account
router.post('/api/accounts', creatAccount);


// Get all users
router.get('/api/users', getAlluser);

// Get user by ID
router.get('/api/users/:id',getUserById);

// Create user
router.post('/api/users', createUser);

module.exports = router;

