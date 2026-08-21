import { useState } from "react";
import { EVENT_CONFIG } from "../config";

function ShareMoments() {
  const [showPopup, setShowPopup] = useState(false);

  function handleOpenPopup() {
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  function handleAgree() {
    setShowPopup(false);
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
          onClick={handleOpenPopup}
        >
          Share Your Moments
          <span>↗</span>
        </button>

      </div>

      {showPopup && (
        <div className="modal-backdrop" onClick={handleClosePopup}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="section-kicker">NOTICE</div>
            <h3>Company Data Policy</h3>
            <p>
              Please note that no company data or confidential material can be uploaded.
            </p>
            <div className="modal-actions">
              <button className="modal-button deny" onClick={handleClosePopup}>
                Deny
              </button>
              <button className="modal-button agree" onClick={handleAgree}>
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShareMoments;
