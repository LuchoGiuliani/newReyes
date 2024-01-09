import React, { useEffect, useState } from "react";
import { TelasGroup1, TelasGroup2 } from "../../constants";
import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Telas() {
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
      width:80,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      mixBlendMode: "multiply",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      id="telas"
      className="p-6 z-30 box2 "
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <h3 className=" tracking-tight sm:text-5xl font-normal text-center pt-8  pb-12">
        Almohadones
      </h3>

 
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        
      }}
      pagination={false}
      autoplay={true}
      initialSlide={3} 
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
        {TelasGroup1.map((telas) => (
          <SwiperSlide>
          <img
            className=""
            src={telas.img}
            alt="imagenTelas"
            key={telas.id}
          />
          </SwiperSlide>
        ))}
          </Swiper>
     

      <div className="mix_grid  p-6 sm:p-16	">
        <div className="mix_grid2">
          <img
            className="mix7 img_telas  border border-black bg-black  rounded-full "
            src="/mix_grid7-min.png"
            alt="imagen Telas"
          />
        </div>
        <div className="mix_grid3">
          {TelasGroup2.map((telas) => (
            <img
              className=" img_telas  border border-black bg-black  rounded-full w-[120px] h-[120px] sm:h-[240px] sm:w-[260px] xl:w-[260px] flex-wrap flex justify-center items-center"
              src={telas.img}
              alt="imagenTelas"
              key={telas.id}
            />
          ))}
          <h1 className="text-center sm:text-2xl z-90">
            Cualquier duda o consulta, <br /> no dudes en comunicarte via <br />{" "}
            <a className=" text-green-600 " href="#">
              WhatsApp
            </a>
          </h1>
          <img
            className=" img_telas border border-black bg-black  rounded-full w-[120px] sm:h-[240px] sm:w-[260px] xl:w-[260px] flex-wrap flex justify-center items-center drop-shadow-2xl "
            src="/mix_grid13-min.png"
            alt="imagen telas"
          />
        </div>
        <div className="mix_grid4 justify-center flex">
          <img
            className="mix14 img_telas   border border-black bg-black rounded-[1.7rem]  w-[60%] "
            src="/mix_grid14-min.png"
            alt=" imagen telas"
          />
        </div>
        <div className="mix_grid5 pb-14 flex flex-row flex-wrap justify-center">
          <img
            className="mix16 img_telas   border border-black bg-black  rounded-xl max-w-[280px]"
            src="/mix_grid16.png"
            alt=" imagen telas"
          />
          <img
            className="mix17 img_telas   border border-black bg-black  rounded-xl  sm:max-w-[440px] max-w-[340px]"
            src="/mix_grid17.png"
            alt=" imagen telas"
          />
        </div>
      </div>
    </div>
  );
}
