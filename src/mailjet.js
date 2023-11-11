
// const Mailjet = require('node-mailjet');
// const mailjet = new Mailjet({
//     apiKey: 'c2daa54e96cd66eeae75c27de2b3d8c7',
//     apiSecret: '28529d0ac1c0c67bc09ec3d07a617434'
// });


const Mailjet = require('node-mailjet');
// const mailjet = Mailjet.apiConnect(
//     'c2daa54e96cd66eeae75c27de2b3d8c7',
//     '28529d0ac1c0c67bc09ec3d07a617434'
// );
const mailjet = new Mailjet({
    apiKey: '611c18a2e5ef1de25c91588a13cbf238',
    apiSecret: '98cb9f94cfafec9db9ef4c7e2d510067'
});


function sendMail(){
    const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
        Messages: [
            {
                From: {
                    Email: "forms@up2data.io",
                    Name: "Up2data-Forms"
                },
                To: [
                    {
                        Email: "almeida@deivisson.eu",
                        Name: "Deivisson Almeida"
                    }
                ],
                Subject: "Your email flight plan!",
                TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
        ]
    })

request
    .then((result) => {
        console.log('finish')
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
}

module.exports = {sendMail}
