import nodemailer from "nodemailer";

const senderEmail = "iamfrs@zohomail.in";

interface ISendMail {
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async ({
  to,
  subject,
  html,
}: ISendMail): Promise<boolean> => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      secure: true,
      port: 465,
      auth: {
        user: senderEmail,
        pass: "tq.GNY!A62wF&nv",
      },
    });

    await transporter.sendMail({
      from: senderEmail,
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    return false;
  }
};
