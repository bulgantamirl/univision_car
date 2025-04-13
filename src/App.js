import "./App.css";

import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PanoramaViewer from "components/PanoramaViewer";
import SliderSection from "components/Slider";
import VideoSection from "components/VideoSection";
import React from "react";

function App() {
  return (
    <div className={"w-screen flex flex-col relative "}>
      <Navbar />
      <PanoramaViewer />
      <SliderSection />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
