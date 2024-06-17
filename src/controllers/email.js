const nodemailer = require('nodemailer');
const { nodemailerConfig } = require('../../nodemailer_config');

const Email = {
  sendEmail: async (req, res) => {
    const transporter = nodemailer.createTransport(nodemailerConfig);

    const { to_email_address } = req.params; 
    const { subject, text } = req.body;

    const data = {
      from: process.env.USERNAME,
      to: to_email_address,
      subject,
      text: `
        ${text}
      `,
      html: `
          <h1>${text}</h1>
      `,
    }
    
    transporter.sendMail(data, (error, info) => {
      if (error) {
        console.log('ERROR', error);
        res.status(500).send({ error });
      }
      else {
        res.redirect(''); // CHANGE THIS TO FRONT END TEMPLATE FOR PRACTICAL EMAIL
      }
    })
  }
};

module.exports = Email;