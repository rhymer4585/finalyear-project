const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Setup mail transporter once
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Save user to DB
    const user = new User({ name, email, phone });
    await user.save();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Registration Successful - Crypto Tracker',
      text: `Hi ${name},\n\nThank you for registering on our Crypto Tracker app!\n\nRegards,\nCrypto Tracker Team`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Email sending error:', error);
      } else {
        console.log('✅ Email sent:', info.response);
      }
    });

    // Response
    res.status(201).json({ message: 'User registered and email sent successfully' });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
