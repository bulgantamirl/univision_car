import left from "assets/left.svg";
import popup from "assets/popup.png";
import right from "assets/right.svg";
import univision from "assets/univision.svg";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import PanoramaViewer from "components/PanoramaViewer";
import SliderSection from "components/Slider";
import Spinner from "components/Spinner";
import VideoSection from "components/VideoSection";
import React, { useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [open, setOpen] = useState(true);
  return (
    <>
      {!isLoaded && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed right-0 top-0 left-0 h-screen flex items-center justify-center bg-white transition-opacity duration-300"
        >
          <div
            style={{ zIndex: 9999 }}
            className="flex flex-col items-center gap-2 justify-center relative"
          >
            <img className={"w-[140px] h-auto"} src={univision} alt={""} />
            <Spinner />
          </div>
        </div>
      )}
      <div
        style={{ zIndex: 100 }}
        className={`fixed top-[160px] right-0 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex flex-row items-center ">
          <button
            onClick={() => setOpen((curr) => !curr)}
            className="absolute left-[-30px] z-30 text-black border-none bg-white rounded-l-full w-[30px] h-[80px] flex items-center justify-center transition cursor-pointer"
          >
            <img
              className={"w-[20px] h-auto object-contain"}
              src={open ? right : left}
              alt="left"
            />
          </button>

          {/* Image */}
          <img
            className="w-[150px] md:w-[200px] lg:w-[300px] xl:w-[420px] h-auto opacity-90"
            src={popup}
            alt="Drawer"
          />
        </div>
      </div>
      <div className={"w-full flex flex-col relative box-border z-10 "}>
        <Navbar />
        <PanoramaViewer setIsLoaded={setIsLoaded} />
        <SliderSection />
        <VideoSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
