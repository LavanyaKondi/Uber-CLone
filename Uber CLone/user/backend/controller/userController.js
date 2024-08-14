const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async(req, res) => {
    const { role, firstName, lastName, password, contactNumber } = req.body;

    // Basic validation
    if (!role || !firstName || !lastName || !password || !contactNumber) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newUser = new User({ role, firstName, lastName, password, contactNumber });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during user registration:', error); // Log the error
        res.status(400).json({ message: 'User registration failed', error: error.message });
    }
};

const loginUser = async(req, res) => {
    const { firstName, password } = req.body;

    if (!firstName || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ firstName });
        if (!user) {
            console.error('User not found');
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Comparing passwords:', password, user.password); // Debug log
        if (!isMatch) {
            console.error('Invalid credentials');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', role: user.role });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { registerUser, loginUser };