import Countdown from "./Countdown";
import { EVENT_CONFIG } from "../config";

function Hero() {
  const scrollDown = () => {
    document
      .getElementById("event-gallery")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-image"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          TATA ADVANCED SYSTEMS
        </div>

        <h1 className="hero-title">
          <span>Leadership Outbound</span>
          <span>&amp; Annual Awards</span>
        </h1>

        <p>{EVENT_CONFIG.eventSubtitle}</p>

        <div className="hero-divider"></div>

        <Countdown />
      </div>

      <button
        className="scroll-indicator"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span></span>
        <span></span>
      </button>
    </section>
  );
}

export default Hero;