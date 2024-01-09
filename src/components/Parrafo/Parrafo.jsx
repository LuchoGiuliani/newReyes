import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Parrafo = () => {
  useEffect(() => {
    gsap.to(".lineH", {
      scrollTrigger: {
        trigger: ".bg_parrafo",
        start: "-=600",
        end: "bottom bottom",
        toggleActions: "restart none none reverse",
        onUpdate: (self) => {
          if (window.innerWidth >= 790) {
            gsap.to(".lineP", {
              width: `${self.progress * 150}vh`,
              duration: 3,
            });
          }
        },
      },
    });
  }, []);
  return (
    <div className="bg_parrafo overflow-hidden flex justify-center p-6 items-center sm:h-screen bg-[#090B09]">
    <div className="flex flex-col gap-4 mt-[220px] sm:mt-[22px] sm:flex-wrap">
      <p className="text-6xl sm:w-full md:w-[460px] p whitespace-normal text-[#f8f8f8]">
        Gracias por pasar a conocer nuestra página!
      </p>
      <div className="border w-10 lineP"></div>
      <div className="text-end">
        <p className="text-4xl italic p-6 text-[#f8f8f8]">
          Somos Liliana y Mariana Reyes, artistas de esencia.
        </p>
        <p className="w-full md:w-[460px] text-2xl p-6 text-[#f8f8f8] whitespace-normal">
          Desde muy pequeñas incursionamos en el mundo creativo, y no hace mucho,
          fusionamos nuestros talentos para trabajar juntas en las mismas obras,
          logrando así un mejor resultado.
        </p>
        <div className="border w-10 lineP"></div>
        <p className="text-2xl italic p-6 text-[#f8f8f8] whitespace-normal">
          Es una experiencia de hermanas maravillosa, en la cual potenciamos
          nuestras capacidades. Esperamos que lo disfruten!
        </p>
      </div>
    </div>
  </div>
  );
};

export default Parrafo;
