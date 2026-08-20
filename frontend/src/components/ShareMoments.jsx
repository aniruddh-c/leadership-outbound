import { EVENT_CONFIG } from "../config";

function ShareMoments() {
  function openGoogleForm() {
    window.open(
      EVENT_CONFIG.googleFormUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      className="share-section"
      id="share-moments"
    >
      <div className="share-content">
        
        <div className="section-kicker">
          SHARE YOUR MOMENTS
        </div>

        <h2>
          Your perspective.
          <br />
          Your memories.
        </h2>

        <p>
          Captured a moment from the summit? <br></br>
          Share your photographs with the TASL
          community.
        </p>

        <button
          className="primary-button"
          onClick={openGoogleForm}
        >
          Share Your Moments
          <span>↗</span>
        </button>

      </div>
    </section>
  );
}

export default ShareMoments;