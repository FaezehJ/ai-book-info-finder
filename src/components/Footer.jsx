
import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="card text-bg-dark mb-3" style={{ maxWidth: "50rem" }}>
          <h3 className="card-title">Have any questions or comments?</h3>
          <p>Send me an email and I will be happy to connect with you!</p>
            <p>faezeh.jahanshiri@gmail.com</p>
          </div>
          <div className="newsletter-subscription">
            <h3>Subscribe to my newsletter:</h3>
            <form>
              <input type="email" placeholder="Type Your Email Here" />
              <button type="submit">Submit</button>
            </form>
          </div>
        <p>© Faezeh Jahan 2023</p>
      </footer>

  );
}

export default Footer;
