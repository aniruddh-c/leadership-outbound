import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoCarousel from "./components/PhotoCarousel";
import SubmissionCarousel from "./components/SubmissionCarousel";
import ShareMoments from "./components/ShareMoments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />

        <PhotoCarousel />

        <SubmissionCarousel />

        <ShareMoments />
      </main>

      <Footer />
    </div>
  );
}

export default App;