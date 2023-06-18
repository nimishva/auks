const { transporter } = require("../config/nodeMailer");

const serviceRequestMail = (content) => {
    const mailOptions = {
        from: 'jasirali407@gmail.com',
        to: content.to_studio.email,
        subject: 'Sending Email using Node.js',
        //   text: 'That was easy!'
        html: `
           <h1> New Order<h1/>
           <h6>service Info</h6>
        <p>service name :${content.service.service_name}</p>
        <p>service charge :${content.service.service_charge}</p>
        <p>image:${content.image}</p>
        <p>quantity required:${content.qty}</p>
        <p>message:${content.message_to_studio} </p>
        
        <h6>Client Info</h6>
        <p>user name :${content.from_user.name}</p>
        <p>user phone:${content.from_user.phone}</p>
        <p>user whatsapp :${content.from_user.whatsapp_number}</p>
        <p>user email :${content.from_user.email}</p>

        
        
        `
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