import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[Font1] pt-3  mt-76 lg:mt-0 text-center ">
     <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center  uppercase  lg:leading-[8vw] leading-[11vw]">
        L'étincelle
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex items-start justify-center rounded-full uppercase lg:leading-[9vw] leading-[11vw]">
        qui
        <div className="lg:h-[8vw] h-9 lg:w-[14vw] w-18  rounded-full lg:rounded-none overflow-y-hidden overflow-x-hidden lg:-mt-2  object-cover ">
         
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] flex items-center justify-center uppercase lg:leading-[9vw] leading-[11vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeHeroText;
