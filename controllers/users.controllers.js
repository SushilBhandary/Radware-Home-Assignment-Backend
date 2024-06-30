const User = require('../models/User');

exports.getAlluser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


exports.getUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
        res.json(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.createUser = async (req, res) => {
    const { name, email, phone} = req.body
    const user = new User({
        name,
        email,
        phone
      });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        es.status(400).json({ message: err.message });
    }
}