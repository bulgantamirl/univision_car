import inside from "assets/inside.png";
import popup from "assets/popup.png";
import rav4Panaroma from "assets/rav41.png";
import carLock from "assets/sounds/car_lock.mp3";
import carOpen from "assets/sounds/motor.mp3";
import univision from "assets/univision.svg";
import Spinner from "components/Spinner";
import { Pannellum } from "pannellum-react";
import React, { useEffect, useRef, useState } from "react";
const PanoramaViewer = () => {
  const playRav4Sound = () => {
    const engine = new Audio(carOpen);
    const chirp = new Audio(carLock);

    chirp.play().catch((e) => console.error("Chirp sound failed:", e));
    engine.play().catch((e) => console.error("Engine sound failed:", e));
  };

  const Scenes = {
    scene1: {
      key: 0,
      title: "Rav4",
      image: rav4Panaroma,
      pitch: -11,
      yaw: -3,
      hotspots: [
        {
          pitch: -12,
          yaw: -25,
          cssClass: "green-hotspot",
          handleClick: () => {
            playRav4Sound();
            console.log("Going inside car...");
            setScene(Scenes.scene2);
          },
        },
      ],
    },
    scene2: {
      key: 1,
      title: "Rav4 Inside",
      image: inside,
      pitch: 10,
      yaw: 180,
      hotspots: [
        {
          pitch: -22,
          yaw: 47,
          cssClass: "green-hotspot",
          handleClick: () => {
            console.log("Going back to scene1...");
            setScene(Scenes.scene1);
          },
        },
      ],
    },
  };
  const [scene, setScene] = useState(Scenes.scene1);
  const [isLoaded, setIsLoaded] = useState(false);

  const [currentImage, setCurrentImage] = useState(scene.image);

  useEffect(() => {
    if (scene.image !== currentImage) {
      setIsLoaded(false);
      setCurrentImage(scene.image);
    }
  }, [scene.image, currentImage]);

  const handleLoad = () => {
    setIsLoaded(true);
  };
  return (
    <section id={"rav4"} className={"w-full h-[90vh]"}>
      {!isLoaded && (
        <div className="fixed right-0 top-0 left-0 h-screen z-100 flex items-center justify-center bg-white transition-opacity duration-300">
          <div className="flex flex-col items-center gap-2 justify-center">
            <img className={"w-[140px] h-auto"} src={univision} alt={""} />
            <Spinner />
          </div>
        </div>
      )}
      <div className={"absolute z-10 right-0 top-[160px]"}>
        <img
          className={
            "w-[150px] md:w-[200px] lg:w-[300px] xl:w-[420px] h-auto opacity-75"
          }
          src={popup}
          alt={""}
        />
      </div>
      <Pannellum
        width={"100%"}
        height={"90vh"}
        title={scene.title}
        image={scene.image}
        pitch={0.28}
        yaw={0}
        hfov={130}
        onLoad={handleLoad}
        autoLoad
        showControls={false}
        showFullscreenCtrl={false}
        showZoomCtrl={false}
        orientationOnByDefault={true}
      >
        {scene.hotspots.map((hotspot, index) => (
          <Pannellum.Hotspot
            key={index}
            type="custom"
            pitch={hotspot.pitch}
            onLoad={handleLoad}
            yaw={hotspot.yaw}
            cssClass={hotspot.cssClass}
            handleClick={hotspot.handleClick}
          />
        ))}
      </Pannellum>
    </section>
  );
};

export default PanoramaViewer;
