


function getServiceRequestTemplate(content) {

    const serviceRequestMailTemplate = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
    
            *{
                color: black;
            }
            h1 {
                text-align: center;
                font-size: larger;
                color: black;
                
            }
        </style>
    
    
    </head>
    
    
    
    <body>
    
    
        <h1> New Order</h1>
        <h4>service Info</h4>
        <p>service name :${content.service.service_name}</p>
        <p>service charge :${content.service.service_charge}</p>
        <p>image:${content.image}</p>
        <p>quantity required:${content.qty}</p>
        <p>message:${content.message_to_studio} </p>
        <h4>Client Info</h4>
        <p>user name :${content.from_user.name}</p>
        <p>user phone:${content.from_user.phone}</p>
        <p>user whatsapp :${content.from_user.whatsapp_number}</p>
        <p>user email :${content.from_user.email}</p>
    </body>
    
    </html>`

    return serviceRequestMailTemplate;

}

module.exports = getServiceRequestTemplate;