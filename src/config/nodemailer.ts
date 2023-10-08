import nodemailer from "nodemailer";

const email = process.env.email;
const pass = process.env.password;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
