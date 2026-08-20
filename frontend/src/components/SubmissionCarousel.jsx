import DrivePhotoCarousel from "./DrivePhotoCarousel";

function SubmissionCarousel() {
  return (
    <section
      className="gallery-section submission-gallery"
      id="your-moments"
    >
      <div className="section-heading">
        <span>02</span>

        <div>
          <div className="section-kicker">
            FROM OUR PEOPLE
          </div>

          <h2>Your moments.</h2>
        </div>
      </div>

      <DrivePhotoCarousel
        endpoint="api/submissions"
        placeholderText="Photographs shared by our people will appear here."
      />
    </section>
  );
}

export default SubmissionCarousel;