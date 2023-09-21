// About.js

import React from 'react';
import './abtstyle.css'; // Import your CSS file for styling

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Our Accounting Application</h1>
        <p>
          Welcome to our accounting application! We are passionate about simplifying financial management
          for individuals and businesses alike. Our mission is to provide you with a powerful, user-friendly, and reliable
          accounting solution that streamlines your financial tasks, saving you time and ensuring accuracy.
        </p>
      </section>

      <section className="about-section">
        <h1>Our Story</h1>
        <p>
          Our journey began with a simple idea: to create an accounting application that anyone, regardless of their
          financial background, can use with ease. We understand that managing finances can be a daunting task, and we wanted
          to change that. Our team of dedicated professionals, including accountants and software developers, came together to
          develop a comprehensive solution.
        </p>
      </section>

      <section className="about-section">
        <h1>Our Commitment</h1>
        <p>
          At the core of our application is a commitment to transparency, efficiency, and user-friendliness.
          We believe that managing your finances should not be a complicated ordeal. Our application is designed
          to simplify the accounting process, so you can focus on what matters most – running your business, achieving
          your financial goals, and enjoying peace of mind.
        </p>
      </section>

      <section className="about-section">
        <h1>Key Features</h1>
        <ul>
          <li>
            <strong>User-Friendly Interface:</strong> Our intuitive interface makes it easy for both beginners and experienced users to navigate through the application effortlessly.
          </li>
          <li><strong>Financial Tracking:</strong>Easily record and categorize your income and expenses, helping you gain insight into your financial health.</li>
          <li><strong>Automated Bookkeeping:</strong>Reduce the burden of manual data entry with our automated bookkeeping features that sync seamlessly with your bank accounts and credit cards.</li>
          <li><strong>Custom Reporting:</strong>Generate insightful reports and charts that provide a clear overview of your financial performance.</li>
          <li><strong>Invoicing and Billing:</strong>Create professional invoices, track payments, and manage your accounts receivable with ease.</li>
          <li><strong>Tax Preparation:</strong> Simplify tax season with tools that help you organize your financial data and generate tax reports.</li>
          <li><strong>Security:</strong>We prioritize the security of your financial data and use state-of-the-art encryption to protect your information.</li>
        </ul>
      </section>

      <section className="about-section">
        <h1>Our Team</h1>
        <p>
          Behind this application is a team of dedicated professionals who are passionate about accounting and technology.
          Our developers continuously work to improve the application's functionality and user experience.
          Our support team is ready to assist you with any questions or issues you may encounter.
        </p>
      </section>

      <section className="about-section">
        <h1>Join Our Community</h1>
        <p>
          We are more than just a software provider; we are a community of individuals and businesses working together to achieve financial success.
          Join our community forums, attend webinars, and stay up-to-date with the latest financial news and tips.
        </p>
      </section>
    </div>
  );
}
