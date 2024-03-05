import React, { useEffect,useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../utils/style.js"

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

 

  useEffect(() => {
    gsap.to(".lineH", {
      rotate: 180,
      duration:3,
      scale:1.4

    }),
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
            width: `${self.progress * 50 + 2}vh`,
            height: `${self.progress * 50 + 2}vh`,
            backgroundColor: `#${self.progress * 50 + 124}`,
            duration:2,
            // rotate: `${self.progress +358}`,
            opacity:`${self.progress  }`,
            overflow:"hidden"
            
          }),
          gsap.to(".border_text", {
            scale:`1.${self.progress  * 42 }`,
            duration:1,     
            overflow:"hidden"
          })
        
        },
      },
    });
  }, []);

  return (
    <div className="hero_bg  justify-center overflow-hidden w-full">
      <div className={`${styles.line}`}></div>
      <div className={`${styles.lineX}`}></div>
      <div className="line h-[46px] border-l p-6 text-white m-6 absolute bottom-0 overflow-hidden"></div>
      <div className="lineX h-[46px] border-b p-6 text-white m-6 absolute bottom-0 overflow-hidden"></div>    
    <div className={`h-screen hero flex   justify-center items-center overflow-hidden `}>   
      <div className="  rounded-lg text-white lineH w-12 overflow-hidden  justify-center"> <img className=" object-fill lineH  opacity-1 overflow-hidden" src="/bull_frances-min.png" alt="foto" /> </div>
     
      <h1 className="font-bold  text-center text-4xl sm:text-8xl p-4 border_text overflow-hidden opacity-0 z-200 ">Arte de Reyes</h1>
      <div className="  rounded-lg text-white lineH w-12  overflow-hidden "> <img className="object-fill opacity-1 overflow-hidden lineH" src="/mural1-min.png" alt="foto" /> </div>
    </div>
    <div className="line h-[46px] border-r p-6 text-white m-6 absolute bottom-0 right-0 overflow-hidden"></div>
    <div className="lineX h-[46px] border-b p-6 text-white m-6 absolute bottom-0 right-0 overflow-hidden"></div>
      <div className="line h-[46px] border-r p-6 text-white m-6 absolute top-0 right-0 overflow-hidden"></div>
      <div className="lineX h-[46px] border-t p-6 text-white m-6 absolute top-0 right-0 overflow-hidden"></div>
    </div>
  );
}
