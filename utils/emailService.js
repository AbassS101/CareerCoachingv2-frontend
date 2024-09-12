import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text, html) => {
  const msg = {
    to,
    from: process.env.SENDER_EMAIL || 'noreply@yourcoachingplatform.com',
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export const sendBookingConfirmationEmail = async (to, bookingDetails) => {
  const subject = 'Booking Confirmation';
  const text = `Your booking has been confirmed for ${bookingDetails.date} with ${bookingDetails.coachName}.`;
  const html = `
    <h1>Booking Confirmation</h1>
    <p>Your booking has been confirmed for ${bookingDetails.date} with ${bookingDetails.coachName}.</p>
    <p>Details:</p>
    <ul>
      <li>Coach: ${bookingDetails.coachName}</li>
      <li>Date: ${bookingDetails.date}</li>
      <li>Time: ${bookingDetails.time}</li>
      <li>Duration: ${bookingDetails.duration}</li>
      <li>Location: ${bookingDetails.location || 'Online'}</li>
    </ul>
    <p>If you need to reschedule or cancel, please log in to your account or contact us.</p>
  `;

  await sendEmail(to, subject, text, html);
};

export const sendPaymentConfirmationEmail = async (to, paymentDetails) => {
  const subject = 'Payment Confirmation';
  const text = `Your payment of ${paymentDetails.amount} has been successfully processed for your booking on ${paymentDetails.date}.`;
  const html = `
    <h1>Payment Confirmation</h1>
    <p>Your payment has been successfully processed.</p>
    <p>Details:</p>
    <ul>
      <li>Amount: ${paymentDetails.amount}</li>
      <li>Date: ${paymentDetails.date}</li>
      <li>Payment Method: ${paymentDetails.paymentMethod}</li>
      <li>Transaction ID: ${paymentDetails.transactionId}</li>
    </ul>
    <p>Thank you for your payment. If you have any questions, please contact our support team.</p>
  `;

  await sendEmail(to, subject, text, html);
};

export const sendReminderEmail = async (to, reminderDetails) => {
  const subject = 'Upcoming Coaching Session Reminder';
  const text = `This is a reminder for your upcoming coaching session with ${reminderDetails.coachName} on ${reminderDetails.date} at ${reminderDetails.time}.`;
  const html = `
    <h1>Upcoming Coaching Session Reminder</h1>
    <p>This is a friendly reminder about your upcoming coaching session.</p>
    <p>Details:</p>
    <ul>
      <li>Coach: ${reminderDetails.coachName}</li>
      <li>Date: ${reminderDetails.date}</li>
      <li>Time: ${reminderDetails.time}</li>
      <li>Location: ${reminderDetails.location || 'Online'}</li>
    </ul>
    <p>We look forward to your session. If you need to reschedule, please log in to your account or contact us as soon as possible.</p>
  `;

  await sendEmail(to, subject, text, html);
};