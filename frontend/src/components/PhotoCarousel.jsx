import DrivePhotoCarousel from "./DrivePhotoCarousel";

function PhotoCarousel() {
  return (
    <section
      className="gallery-section"
      id="event-gallery"
    >
      <div className="section-heading">
        <span></span>

        <div>
          <div className="section-kicker">
            MOMENTS FROM THE SUMMIT
          </div>

          <h2>Moments from the summit.</h2>
        </div>
      </div>

      <DrivePhotoCarousel
        endpoint="api/photos"
        placeholderText="Photographs from the event will appear here."
      />
    </section>
  );
}

export default PhotoCarousel;