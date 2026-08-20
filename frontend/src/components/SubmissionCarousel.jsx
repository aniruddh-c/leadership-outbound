import DrivePhotoCarousel from "./DrivePhotoCarousel";

function SubmissionCarousel() {
  return (
    <section className="gallery-section submission-gallery">

      <div className="section-heading">
        <span></span>

        <div>
          <div className="section-kicker">
            FROM OUR PEOPLE
          </div>

          <h2>Your moments.</h2>
        </div>
      </div>

      <DrivePhotoCarousel
        endpoint="api/submissions"
        placeholderText="Photographs shared by you will appear here."
      />

    </section>
  );
}

export default SubmissionCarousel;