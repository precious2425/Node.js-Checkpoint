// Task 5: Send an email using nodemailer
// npm install nodemailer
//
// This version uses nodemailer's built-in test mode (Ethereal Email)
// instead of a real Gmail account. It automatically generates a
// temporary, fake mailbox every time the script runs — no real email
// address, password, or App Password needed anywhere in this file.
//
// After running, it prints a "preview URL" you can open in a browser
// to see the email that was "sent."
//
// If you'd rather send to your OWN real inbox instead, see the
// commented-out Gmail version at the bottom of this file.

const nodemailer = require("nodemailer");

async function main() {
  // Creates a temporary throwaway test account (no signup needed)
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: testAccount.user,
    to: testAccount.user, // sending to the same test address = "sending to yourself"
    subject: "Node.js Checkpoint — Test Email",
    text: "Hello from Node.js! This email confirms nodemailer is working.",
  });

  console.log("Email sent:", info.messageId);
  console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

/*
// --- Alternative: send to your REAL Gmail inbox instead ---
// Uncomment this block (and remove the code above) if you specifically
// need to send to a real email address rather than a test one.
//
// const nodemailer = require("nodemailer");
//
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "YOUR_EMAIL@gmail.com",
//     pass: "YOUR_APP_PASSWORD", // generate at myaccount.google.com/apppasswords
//   },
// });
//
// transporter.sendMail(
//   {
//     from: "YOUR_EMAIL@gmail.com",
//     to: "YOUR_EMAIL@gmail.com",
//     subject: "Node.js Checkpoint — Test Email",
//     text: "Hello from Node.js! This email confirms nodemailer is working.",
//   },
//   (err, info) => {
//     if (err) return console.error("Error sending email:", err);
//     console.log("Email sent:", info.response);
//   }
// );
//
// Remember: NEVER commit your real email/password to GitHub. Put the
// placeholders back before pushing.
*/