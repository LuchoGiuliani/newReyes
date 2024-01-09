import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg_footer flex flex-col justify-center bg-slate-800 opacity-70  gap-2 p-2 fixed bottom-[46%] max-w-[48px] rounded-r-md">
        <div className="footer_left"><h3>AR</h3></div>
        <div className="footer_right flex  flex-col justify-center gap-2">
        <a href="https://github.com/LuchoGiuliani">
          <img
            className="max-w-[24px] hover:scale-110"
            src="/github.png"
            target="_blank"
            alt="github"
          />
        </a>
        <a href="#front" className="max-w-[24px] hover:scale-110">
        <img src="/whatsapp.png" alt="" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/arte.de.reyes/?hl=es"
        className="max-w-[24px] hover:scale-110"
      >
        <img
          src="/instagram.png"
          className="hover:scale-110 w-"
          alt="instagram"
        />
      </a>
        </div>
      </div>
    </>
  );
}
