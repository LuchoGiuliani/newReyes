import { Navbar, Hero, Telas, Oleo, Murales, Footer } from "./components";

import "./App.css";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Parrafo from "./components/Parrafo/Parrafo";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const main = useRef();
  const colores = ["#3e4f3f", "#ece8e1"];

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box");
    const box3 = document.querySelector(".box3");

    ScrollTrigger.create({
      trigger: box3,
      start: "680",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(box3, {
          duration: 1,
          color: "white",
        });
      },
      onLeaveBack: () => {
        gsap.to(box3, {
          duration: 1,
          color: "black",
        });
      },
    });
    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "680",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
            backgroundColor: "#3e4f3f",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "#ece8e1",
            duration: 1,
          });
        },
      });
    });
  }, []);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".box2");
    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: "top 500px",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(box, {
            color: "white",
            backgroundColor: "rgb(138,101,66,1)",
            duration: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(box, {
            backgroundColor: "rgb(215,179,111,1)",
            duration: 1,
          });
        },
      });
    });
  }, []);

  return (
    <div ref={main} className="App  background bg-[#090B09] overflow-hidden">
     
      <div className=" h-full ">
        <Navbar />
        <Hero className="h-screen" />
      
      </div>
      <Oleo className="box" />

      <Telas className="box2" />
      {/* <div
          className="rounded-xl bg-slate-50 flex sm:mx-32 m-6 p-4 "
          data-aos="zoom-in-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-once="true"
        >
          <p className="font-bold text-[16px]    sm:text-[24px]  text-center    text-[#090d1d]  ">
            Gracias por pasar a conocer nuestra página! Somos Liliana y Mariana
            Reyes, artistas de esencia. Desde muy pequeñas incursionamos en el
            mundo creativo, y no hace mucho, fusionamos nuestros talentos para
            trabajar juntas en las mismas obras, logrando así un mejor
            resultado. Es una experiencia de hermanas maravillosa, en la cual
            potenciamos nuestras capacidades. Esperamos que lo disfruten!
          </p>
          <img
            className="absolute w-[15%] top-[220px] right-10"
            src="/arrow.svg"
            alt="arrow"
          />
        </div> */}
        <Parrafo />
      <Murales className="" />
      <Footer />
    </div>
  );
}

export default App;
