const { transporter } = require("../config/nodeMailer");
const handlebars = require('handlebars')

const fs = require('fs');
const getServiceRequestTemplate = require("../templates/serviceRequestMail");



const serviceRequestMail = (content) => {
    const mailOptions = {
        from: 'jasirali407@gmail.com',
        to: content.to_studio.email,
        subject: 'New order by client',
        html: getServiceRequestTemplate(content)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



module.exports = serviceRequestMail;