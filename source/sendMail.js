const nodeMailer = require('nodemailer');
const key = require('./keys/keys');

const sendMail = (name, email, phone, description) => {
  let transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: key.LOGIN,
      pass: key.PASS,
    },
  });

  transporter.sendMail({
    from: `anastasijasupranovich@gmail.com`,
    to: key.TARGET_EMAIL,
    subject: 'Заявка на запись английского',
    text: description,
    html:
      `<table style=max-width:600px;border-collapse:collapse><tr><th colspan=2 style=width:100%;text-transform:uppercase;background-color:#c8e6f7;padding-top:22px;padding-bottom:20px;font-size:20px;font-weight:700;color:#5b5b5b>Заявка с сайта English-Pro<tr><td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b>Имя<td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b>${name}<tr><td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b;background:#8fd4c1;color:#fff>E-mail<td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b;background:#8fd4c1;color:#fff>${email}<tr><td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b>Телефон<td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b>${phone}<tr><td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b;background:#8fd4c1;color:#fff>Пожелания<td style=text-align:left;padding-left:30px;padding-top:20px;padding-bottom:20px;font-size:18px;padding-right:20px;color:#5b5b5b;background:#8fd4c1;color:#fff>${description}</table>`
  });
};

module.exports = sendMail;
