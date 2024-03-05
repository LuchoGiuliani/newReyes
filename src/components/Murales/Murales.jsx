import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Murales() {
  
  const images = [
    { src: "/mural1-min.png", alt: "Mural 1" },
    { src: "/shark.webp", alt: "Mural 2" },
    { src: "/mural2-min.png", alt: "Mural 3" },
    { src: "/mural3-min.png", alt: "Mural 4" },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="murales">
      <div className="flex justify-center" id="">
        <h1 className="font-semibold pt-16 pb-12 text-[36px] tracking-wide sm:text-6xl text-zinc-800">
          Murales
        </h1>
      </div>
      <div className="m-3 mb-0 flex flex-wrap justify-center items-center gap-8 auto-cols-fr">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center flex-col pb-6">
            <img
              className={`mural${index + 1} rounded-lg max-h-[800px] max-w-[400px]`}
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}