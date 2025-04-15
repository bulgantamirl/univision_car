import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PanoramaViewer from "components/PanoramaViewer";
import SliderSection from "components/Slider";
import VideoSection from "components/VideoSection";
import React from "react";

function App() {
  return (
    <div className={"w-full flex flex-col relative box-border "}>
      <Navbar />
      <PanoramaViewer />
      <SliderSection />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
