import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageref = useRef(null);

  const imageArray = [
    "/04-Animation/Photoes/img1.jpg",
    "/04-Animation/Photoes/img2.jpg",
    "/04-Animation/Photoes/img3.jpg",
    "/04-Animation/Photoes/img4.jpg",
    "/04-Animation/Photoes/img5.jpg",
    "/04-Animation/Photoes/img6.jpg",
    "/04-Animation/Photoes/img7.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 17%",
        end: "top -180%",
        pin: true,
        pinSpacing: true,
        // pinReparent:false,
        pintype: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          console.log(imageref.current.src);
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageref.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <div className="parent ">
      <div id="page1" className=" py-1   ">
        <div
          ref={imageDivRef}
          className="absolute lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:top-30 top-24  left-[29vw]  "
        >
          <img
            ref={imageref}
            className="h-full w-full object-cover  lg:rounded-3xl rounded-xl"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          ></img>
        </div>
        <div className="relative font-[Font2]">
          <div className=" lg:mt-[55vh] mt-[28vh] lg:-ml-10 ">
            <h1 className="lg:text-[19vw] text-7xl text-center uppercase leading-[17vw]">
              SOIxan7e
              <br /> douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-0.5 mt-20 ">
            <p className="lg:text-5xl text-[5.5vw] p-2 leading-5.5 lg:leading-12">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </div>
  );
};

export default Agence;
