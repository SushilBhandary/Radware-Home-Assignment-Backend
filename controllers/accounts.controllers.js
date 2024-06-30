const Account = require('../models/Account');

exports.getAllAccount = async (req, res) => {
    try {
      const accounts = await Account.find();
      res.json(accounts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

exports.getAccountByID = async (req, res) => {
    try {
        let account = await Account.findById(req.params.id);
        if (account == null) {
            return res.status(404).json({ message: 'Cannot find account' });
        }
        res.json(account);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.creatAccount = async (req, res) => {
    const { name , type, description} = req.body
    const account = new Account({
        accountName: name,
        type: type,
        description: description
    });
    try {
    const newAccount = await account.save();
    res.status(201).json(newAccount);
    } catch (err) {
    res.status(400).json({ message: err.message });
    }
}