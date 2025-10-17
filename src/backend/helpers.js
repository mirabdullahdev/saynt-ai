import { emailTemplates } from "@/data/templates";
import nodemailer from 'nodemailer';

export const sendMailTemplate = async (toEmail, type, codes) => {
    const template = emailTemplates[type];

    if(template)
    {
        let subject = template.subject;
        let message = template.message;

        for (const key in codes) {
            message = message.replaceAll(key, codes[key]);
        }

        return sendMail(toEmail, subject, message);
    }
    else
    {
        return false;
    }

} 

export const sendMail = async (to, subject, message) => { 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: to,
        subject: subject,
        text: message,
    };

    let mailSent = await transporter.sendMail(mailOptions);
    if(mailSent)
    {
        return mailSent;
    }
    else
    {
        return false;
    }
}

export const checkVar = (data) => {
    return typeof data != "undefined" && data != null;
} 


export const getBearerToken = (req) => {
    let authorization = req.headers.get('authorization')
    if(authorization) {
        let tokenArr = authorization.split(" ");
        let token = tokenArr[1];

        return token;
    } else {
        return false;
    }
}