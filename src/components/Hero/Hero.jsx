import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.to(".border_text",{
      opacity: 1,
      duration:8
    })
    gsap.to(".line", {
      scrollTrigger: {
        trigger: ".hero",  
        start: "top top",
        end: "bottom top",       
        toggleActions: "restart none none reverse",
        onUpdate: (self) => {
          gsap.to(".line", {
            height: `${self.progress * 100}vh`,
            duration: 3,
            overflow:"hidden"
          }),
         
          gsap.to(".lineX", {
            width: `${self.progress * 30}vh`,
            duration: 3,
            overflow:"hidden"
          }),
          gsap.to(".lineH", {
            width: `${self.progress * 50 + 12}vh`,
            height: `${self.progress * 50 + 12}vh`,
            backgroundColor: `#${self.progress * 50 + 124}`,
            duration:2,
            rotate: `${self.progress +358}`,
            opacity:`${self.progress  }`,
            overflow:"hidden"
            
          }),
          gsap.to(".border_text", {
            scale:`1.${self.progress  * 22 }`,
            duration:1,     
            overflow:"hidden"
          })
          
        },
      },
    });
  }, []);

  return (
    <div className="hero_bg overflow-hidden w-full">
      <div className="line h-[46px] border-l p-6 text-white m-6 absolute top-0 overflow-hidden"></div>
      <div className="lineX h-[46px] border-t p-6 text-white m-6 absolute top-0 overflow-hidden"></div>
      <div className="line h-[46px] border-l p-6 text-white m-6 absolute bottom-0 overflow-hidden"></div>
      <div className="lineX h-[46px] border-b p-6 text-white m-6 absolute bottom-0 overflow-hidden"></div>    
    <div className="h-screen hero flex  justify-center items-center overflow-hidden">   
      <div className=" opacity-5 rounded-lg text-white lineH w-6 overflow-hidden "> <img className=" object-fill p-2 opacity-1 overflow-hidden" src="/bull_frances-min.png" alt="foto" /> </div>
     
      <h1 className="font-bold  text-4xl sm:text-8xl p-4 border_text overflow-hidden opacity-0 z-200 ">Arte de Reyes</h1>
      <div className=" opacity-5 rounded-lg text-white lineH w-6  overflow-hidden "> <img className="object-fill p-2 opacity-1 overflow-hidden" src="/mural1-min.png" alt="foto" /> </div>
    </div>
    <div className="line h-[46px] border-r p-6 text-white m-6 absolute bottom-0 right-0 overflow-hidden"></div>
    <div className="lineX h-[46px] border-b p-6 text-white m-6 absolute bottom-0 right-0 overflow-hidden"></div>
      <div className="line h-[46px] border-r p-6 text-white m-6 absolute top-0 right-0 overflow-hidden"></div>
      <div className="lineX h-[46px] border-t p-6 text-white m-6 absolute top-0 right-0 overflow-hidden"></div>
    </div>
  );
}
