const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jasirali407@gmail.com',
        pass: 'vylsagxvniailglk'
    }
});

module.exports = { transporter };



