const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const BankDetail = require('../models/bankDetails');
const Contact = require('../models/contact-model');

require('dotenv').config();

const home = async (req, res) => {
    try {
      res.status(200).json({ message: 'Welcome to the project' });
    } catch (error) {
      res.status(400).json({ msg: 'Page not found', error: error.message });
    }
  };

  const register = async (req, res) => {
    try {
      const { name, email, phone, password, district, state } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash password before saving
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create user with hashed password
      const userCreate = await User.create({
        name,
        email,
        phone,
        password: hashedPassword, // Use hashed password
        district,
        state,
      });
  
      const token = await userCreate.generateToken();
  
      return res.status(201).json({
        message: 'Registration successful',
        token,
        userId: userCreate._id.toString(),
      });
    } catch (error) {
      console.error('Error in register function:', error);
      return res.status(500).json({
        message: 'Internal server error',
        error: error.message,
      });
    }
  }; 

  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (!userExist)
        return res.status(400).json({ message: 'Invalid Credentials' });
  
      const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
  
      if (isPasswordCorrect) {
        return res.status(200).json({
          message: 'Login successful',
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
 
  const user = async (req, res) => {
    try {
      const userData = req.user;
      return res.status(200).json({ userData });
    } catch (error) {
      res.status(400).json({ msg: 'Internal server error', error: error.message });
    }
  };

  const addBankDetails = async (req, res) =>{
    try {
      const { bankName, accountHolder, accountNumber, ifscCode, upiId } = req.body;

      // Check if account number is unique
      const existingAccount = await BankDetail.findOne({ accountNumber });
      if (existingAccount) {
          return res.status(400).json({ msg: "Account number already exists" });
      }

      // Create a new bank detail entry
      const newBankDetail = new BankDetail({ bankName, accountHolder, accountNumber, ifscCode, upiId });
      await newBankDetail.save();

      res.status(201).json({ msg: "Bank details added successfully", bankDetail: newBankDetail });
  } catch (error) {
      console.error("Error in addBankDetails:", error);
      res.status(500).json({ msg: "Server error", error: error.message });
  }
  };

  const contactUs = async (req, res) => {
    try {
      const { email, name, message } = req.body;

      if (!email || !name || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const contactEntry = new Contact({ email, name, message });
        await contactEntry.save();
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error in contactUs:', error);
      res.status(500).json({ msg: 'Server error', error: error.message });
    }
  };
  

module.exports = { home , register , login , user, addBankDetails, contactUs };