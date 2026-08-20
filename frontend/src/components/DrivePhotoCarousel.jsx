import { useEffect, useState } from "react";
import { EVENT_CONFIG } from "../config";

function DrivePhotoCarousel({
  endpoint,
  placeholderText,
}) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchPhotos() {
    try {
      const response = await fetch(
        `${EVENT_CONFIG.apiUrl}/${endpoint}`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch photographs");
      }

      const data = await response.json();

      setPhotos(data);
    } catch (error) {
      console.error("Photo loading error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPhotos();

    const interval = setInterval(fetchPhotos, 60000);

    return () => clearInterval(interval);
  }, [endpoint]);

  if (loading) {
    return (
      <div className="gallery-placeholder">
        {placeholderText}
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="gallery-placeholder">
        {placeholderText}
      </div>
    );
  }

  /*
   * Duplicate the photographs so the second set follows
   * immediately after the first set. This creates the
   * seamless looping effect.
   */
  const tickerPhotos = [...photos, ...photos];

  return (
    <>
      <div className="photo-ticker">
        <div className="photo-ticker-track">
          {tickerPhotos.map((photo, index) => (
            <button
              className="photo-card"
              key={`${photo.id}-${index}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={`${EVENT_CONFIG.apiUrl}/api/photos/${photo.id}`}
                alt=""
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>

          <img
            src={`${EVENT_CONFIG.apiUrl}/api/photos/${selectedPhoto.id}`}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default DrivePhotoCarousel;