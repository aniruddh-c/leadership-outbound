import { EVENT_CONFIG } from "../config";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        TATA ADVANCED SYSTEMS
      </div>

      <div className="footer-event">
        {EVENT_CONFIG.eventTitle}
      </div>

      <div className="footer-year">
        © 2026 TASL
      </div>

    </footer>
  );
}

export default Footer;