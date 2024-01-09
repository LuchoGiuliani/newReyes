import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Murales() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="murales">
      <div className="flex  justify-center " id="">
        <h1 className="font-semibold pt-16 pb-12 text-[36px] tracking-wide	  sm:text-6xl    text-zinc-800">
          {" "}
          Murales
        </h1>
      </div>
      <div className="m-3 mb-0 flex flex-wrap justify-center items-center gap-8 auto-cols-fr">
        <div
          className="flex justify-center items-center flex-col pb-6"
       
        >
          <img
            className="mural1 rounded-lg max-h-[800px] max-w-[400px]"
            src="/mural1-min.png"
            alt="Mural 1"
          />
        </div>
        <div
          className="flex justify-center items-center flex-col pb-6"
        
      
        >
          <img
            className="mural2 rounded-lg max-h-[800px] max-w-[400px]"
            src="/shark.webp"
            alt="Mural 2"
          />
        </div>
        <div
          className="flex justify-center items-center flex-col pb-6"
         
        >
          <img
            className="mural3 rounded-lg max-h-[800px] max-w-[400px]"
            src="/mural2-min.png"
            alt="Mural 3"
          />
        </div>
        <div
          className="flex justify-center items-center flex-col pb-6"
          
        >
          <img
            className="mural4 rounded-lg max-h-[800px] max-w-[400px]"
            src="/mural3-min.png"
            alt="Mural 4"
          />
        </div>
      </div>
    </div>
  );
}
