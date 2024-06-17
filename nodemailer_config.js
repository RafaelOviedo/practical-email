const dotenv = require('dotenv');

dotenv.config();

const nodemailerConfig = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASS,
  }
};

module.exports = { nodemailerConfig };