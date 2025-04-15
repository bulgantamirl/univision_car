import React from "react";

const VideoSection = () => {
  return (
    <section
      id={"video"}
      className={
        "w-full bg-white h-auto my-[30px] md:my-[60px] lg:my-[100px] flex flex-col items-center box-border justify-center"
      }
    >
      <div className="w-full box-border px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-7xl aspect-video flex flex-col items-center justify-center mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/x_pFGzwYeno?autoplay=1&mute=1"
            title="Удирдлагаараа шинэ машинаа асаа | RAV4-тэй кино | Univision"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
