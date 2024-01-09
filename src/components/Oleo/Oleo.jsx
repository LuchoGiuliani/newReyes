import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";


export default function Oleo() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  const closePreview = () => {
    document.getElementById("preview-image").classList.add("fade-out");
    setIsPreviewOpen(false);
    setTimeout(() => {
      setPreviewImage(null);
    }, 500);
  };

  const [images, setImages] = useState([
    "oleo1.png",
    "oleo9.webp",
    "oleo3.png",
    "oleo4.webp",
    "oleo5.webp",
    "oleo2.png",
    "oleo7.webp",
    "oleo8.webp",
    "oleo10.webp",
    "oleo11.webp",
    "oleo12.png",
    "oleo13.png",
  ]);

  const [currentImages, setCurrentImages] = useState(images);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const scrollCount = useRef(0);

  const openPreview = (image) => {
    setPreviewImage(image);
    setIsPreviewOpen(true);
  };

  const handleScroll = () => {
    scrollCount.current += 1;
    if (scrollCount.current === 2) {
      setPreviewImage(null);
      scrollCount.current = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
    },

    fadeIn: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className=" bg_oleo flex items-center justify-center">
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div
        className={`box bg_oleo w-full ${isPreviewOpen ? "bg_oleo-open" : ""}`}
      >
        <div className=" flex justify-center  " id="oleo">
          <div
            data-aos="fade-up"
            data-aos-offset="-20"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          >
            <h3 className="box3 border-b sm:text-5xl font-normal  items-center  pt-16 pb-2  tracking-tight  ">
              Pinturas de técnicas mixtas
            </h3>
          </div>
        </div>
        <div className="oleo  p-6 grid grid-cols-2  justify-items-center gap-y-10 gap-2 md:grid-cols-3">
          {currentImages.map((image, index) => (
            <img
              className="oleo_img  max-h-[390px] cursor-pointer z-10 hover:scale-[105%]"
              src={image}
              key={index}
              onClick={() => openPreview(image)}
              alt="Pinturas de técnicas mixtas"
            />
          ))}
          {previewImage && (
            <div className="preview-overlay">
              <img
                id="preview-image"
                className="preview-image p-6 z-20 max-w-[440px] sm:max-w-[680px]"
                src={previewImage}
                onClick={closePreview}
                alt="Pinturas de técnicas mixtas"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
