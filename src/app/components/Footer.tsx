export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">CAR Express</div>
            <p className="footer-description">
              Layanan pengantaran cepat, aman, dan terpercaya untuk semua kebutuhan Anda.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">🌐</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📘</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Safety Center</a></li>
              <li><a href="#">Community Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Cookies Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 CAR Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
