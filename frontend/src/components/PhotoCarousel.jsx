import DrivePhotoCarousel from "./DrivePhotoCarousel";

function PhotoCarousel() {
  return (
    <section
      className="gallery-section"
      id="event-gallery"
    >
      <div className="section-heading">
        <span>01</span>

        <div>
          <div className="section-kicker">
            MOMENTS FROM THE SUMMIT
          </div>

          <h2>Moments from the summit.</h2>
        </div>
      </div>

      <DrivePhotoCarousel
        endpoint="api/photos"
        placeholderText="Photographs from the summit will appear here."
      />
    </section>
  );
}

export default PhotoCarousel;