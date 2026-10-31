import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            <span>✚</span> MediSphere
          </h2>

          <p>
            Bringing healthcare services together
            for a simpler and better experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <a href="mailto:contact@medisphere.example">
            Email Us
          </a>
          <a href="#home">Help Center</a>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms & Conditions</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MediSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;