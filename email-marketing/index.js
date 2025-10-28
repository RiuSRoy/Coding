const fs = require('fs');
const csv = require('csv-parser');
const nodemailer = require('nodemailer');

// Create a transporter using your email service credentials (e.g., Gmail).
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'royaltouchmalda@gmail.com',
    pass: 'hvcg ywje baoo qcix',
  },
});

// Read the CSV file and send emails.
fs.createReadStream('email.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Assuming the email column in your CSV is named 'email'.
    let { email, firstName } = row;
    firstName = firstName || "valued guest"
    const mailOptions = {
      from: 'royaltouchmalda@gmail.com',
      to: email,
      subject: '✨Elevate Your Celebrations with Our Exquisite Banquet Venue',
      html: `
      <div>
        <p>Dear ${firstName},</p>
        <p>We wish to express our heartfelt gratitude for choosing our restaurant as your dining destination.</p>
        <p>As we celebrate Lokkhi Puja, we invite you to consider Royal Touch as your go-to destination for hosting memorable celebrations. Our banquet facility is the perfect venue for a wide range of events, from birthdays and marriage anniversaries to corporate functions and everything in between.</p>

        <p><strong>Why Choose Our Banquet?</strong></p>
    <ul>
        <li><strong>Elegant Ambiance:</strong> Our banquet hall is elegantly designed to create the perfect backdrop for your special celebrations.</li>
        <li><strong>Dedicated Service:</strong> Our professional team is committed to ensuring that every detail of your event is taken care of, leaving you stress-free to enjoy the celebration.</li>
        <li><strong>Customizable Options:</strong> We offer a range of customization options to make your event uniquely yours, from décor to menu selections.</li>
    </ul>
        <p>Whether you're planning a birthday celebration, a corporate event, a wedding reception, or any other special gathering, Royal Touch is here to make it extraordinary.
        <p><strong>Let's Plan Your Event!</strong></p>
    <p>Reach out to our dedicated events team to discuss your upcoming celebration and to explore our banquet options. We're here to make your event a resounding success, ensuring it's a day to remember for you and your guests.</p>

    <p><strong>Contact Information:</strong></p>
    <p>Phone: 9475875227<br>
    Email: royaltouchmalda@gmail.com</p>
    <br>
    </div>
  `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email to ${email}: ${error}`);
      } else {
        console.log(`Email sent to ${email}: ${info.response}`);
      }
    });
  })
  .on('end', () => {
    console.log('All emails sent');
  });
