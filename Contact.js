import React from 'react';
import './constyle.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Thank you for considering our accounting application for your financial needs. We're here to assist you in any way we can. Whether you have questions, need support, or want to provide feedback, we're just a message away.</p>
      </div>

      <div className="contact-methods">
        <div className="contact-method">
          <h3>Email</h3>
          <p>For general inquiries and support, please email us at <a href="mailto:contact@youraccountingapp.com">contact@youraccountingapp.com</a>. Our dedicated support team will respond promptly to assist you with any issues or questions you may have.</p>
        </div>

        <div className="contact-method">
          <h3>Phone</h3>
          <p>If you prefer to speak with a member of our team directly, you can reach our customer support hotline at +1 (555) 123-4567 during our business hours, Monday through Friday, 9:00 AM to 5:00 PM (Your Timezone).</p>
        </div>

        <div className="contact-method">
          <h3>Community Forums</h3>
          <p>Join our vibrant user community on our forums. Here, you can connect with other users, share tips and tricks, and get answers to your questions from experienced users and our support staff. Visit our forums at <a href="https://community.youraccountingapp.com">community.youraccountingapp.com</a>.</p>
        </div>

        <div className="contact-method">
          <h3>Social Media</h3>
          <p>Stay up-to-date with our latest news, updates, and financial tips by following us on social media:</p>
          <ul>
            <li><a href="https://www.facebook.com/youraccountingapp">Facebook</a></li>
            <li><a href="https://twitter.com/youraccountingapp">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/youraccountingapp">LinkedIn</a></li>
          </ul>
        </div>

        <div className="contact-method">
          <h3>Feedback</h3>
          <p>We value your feedback and are continually working to improve our application. If you have suggestions, feature requests, or any comments that can help us serve you better, please don't hesitate to let us know. You can share your feedback via email or through our community forums.</p>
        </div>

        <div className="contact-method">
          <h3>Business Address</h3>
          <p>If you prefer traditional mail or need to send us documents, you can reach us at our physical address:</p>
          <p>Your Accounting App, Inc.<br />123 Main Street<br />Suite 456<br />City, State, ZIP</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
