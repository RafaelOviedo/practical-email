const nodemailer = require('nodemailer');
const { nodemailerConfig } = require('../../nodemailer_config');
const { prepareEmailContent } = require('../utils/prepareEmailContent');

const Email = {
  sendEmail: async (req, res) => {
    const emailContent = prepareEmailContent(req.body);

    const requestOrigin = req.get('Origin');
    
    const { to_email_address } = req.params; 
    
    const data = {
      from: process.env.USERNAME,
      to: to_email_address,
      subject: `New email sent from ${requestOrigin} - Practical Email`,
      text: emailContent,
      html: emailContent,
    }
    
    const transporter = nodemailer.createTransport(nodemailerConfig);

    transporter.sendMail(data, (error, info) => {
      if (error) {
        res.status(500).send({ error });
      }
      else {
        res.redirect(''); // CHANGE THIS TO FRONT END TEMPLATE FOR PRACTICAL-EMAIL
      }
    })
  }
};

module.exports = Email;