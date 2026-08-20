import { useEffect, useState } from "react";
import { EVENT_CONFIG } from "../config";

function DrivePhotoCarousel({
  endpoint,
  placeholderText
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
        throw new Error("Unable to fetch photos");
      }

      const data = await response.json();

      setPhotos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPhotos();

    // Check for newly uploaded photographs every minute.
    const interval = setInterval(
      fetchPhotos,
      60000
    );

    return () => clearInterval(interval);
  }, [endpoint]);

  return (
    <>
      {loading ? (
        <div className="gallery-placeholder">
          {placeholderText}
        </div>
      ) : photos.length === 0 ? (
        <div className="gallery-placeholder">
          {placeholderText}
        </div>
      ) : (
        <div className="photo-track">
          {photos.map((photo) => (
            <button
              className="photo-card"
              key={photo.id}
              onClick={() =>
                setSelectedPhoto(photo)
              }
              aria-label={`View ${photo.name}`}
            >
              <img
                src={`${EVENT_CONFIG.apiUrl}/photos/${photo.id}`}
                alt=""
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {selectedPhoto && (
        <div
          className="lightbox"
          onClick={() =>
            setSelectedPhoto(null)
          }
        >
          <button
            className="lightbox-close"
            onClick={() =>
              setSelectedPhoto(null)
            }
          >
            ×
          </button>

          <img
            src={`${EVENT_CONFIG.apiUrl}/photos/${selectedPhoto.id}`}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default DrivePhotoCarousel;