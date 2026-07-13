import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link } from 'react-router-dom'


const FullScreenNav = () => {
  const fullNavLinksref = useRef(null);

  const fullscreenref = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
 





  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav',{
      display:'block',
      
    })
    tl.to(".stairing", {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX:0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to('.navlink',{
      opacity:1
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to(".stairing", {
      height: '0%',
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".link", {
      opacity: 0,
      rotateX:90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.navlink',{
      opacity:0
    });
    tl.to('.fullscreennav',{
      display:'none',
    
    })
  }



  useGSAP(
    function () {
      if (navOpen) {
        gsap.to(".fullscreennav", {
          display: "block",
        });
        gsapAnimation();
      } else {
        gsap.to(".fullscreennav", {
          display: "none",
        });
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullscreenref}
      id="fullscreennav"
      className="fullscreennav hidden text-white z-50 h-screen w-full  overflow-hidden absolute "
    >
      <div className="h-screen  w-full fixed">
        <div className="h-full w-full flex ">
          <div className="stairing h-full w-1/5  bg-black"></div>
          <div className="stairing h-full w-1/5  bg-black"></div>
          <div className="stairing h-full w-1/5  bg-black"></div>
          <div className="stairing h-full w-1/5  bg-black"></div>
          <div className="stairing h-full w-1/5  bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksref} className="relative">
        <div className=" navlink flex w-full justify-between items-start p-3">
          <div className="">
            <div className="w-28">
              <svg
                className=" w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-32 h-24 lg:w-32 w-24  relative cursor-pointer "
          >
            <div className="lg:h-44 h-33 lg:w-1 w-0.5 absolute  -rotate-45 origin-top bg-[#D3FD50]"></div>
            <div className="lg:h-44 h-33 lg:w-1 w-0.5 absolute  right-0 rotate-45 origin-top bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="lg:py-0.5 py-24">
          <div className="link origin-top relative  border-y border-gray-400">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center leading-[0.8] lg:pt-5 pt-2 uppercase">
              Projets
            </h1>

            <div className=" moveLink  absolute flex top-0 bg-[#D3FD50] text-black">
              <Link to='/Projects' onClick={useGSAP()} className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8] leading-1  lg:pt-5 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-22 h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8] leading-1  lg:pt-5 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-22 h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                ></img>
              </Link>

              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8] leading-1  lg:pt-5 uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-22 h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl  pt-2  text-center lg:leading-[0.8] leading-1  lg:pt-5  uppercase">
                  Pour tout voir
                </h2>
                <img
                  className=" lg:h-22  h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                ></img>
              </div>
            </div>
          </div>

          <div className="link origin-top relative  border-b border-gray-400">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center leading-[0.8] lg:pt-5 pt-2 uppercase">
              Agence
            </h1>

            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <Link to='/Agence' onClick={useGSAP()} className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl text-center leading-[0.8] pt-2 lg:pt-5 uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className=" lg:h-22  h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl text-center leading-[0.8] pt-2 lg:pt-5 uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className=" lg:h-22  h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                ></img>
              </Link>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl text-center leading-[0.8] pt-2 lg:pt-5 uppercase">
                  Pour tout savoir5
                </h2>
                <img className=" lg:h-22  h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/teamMembers/Carl_640X290.jpg?w=640&h=290&s=914a1d30b37d791492458db8753216d2"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl text-center leading-[0.8] pt-2 lg:pt-5 uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className=" lg:h-22  h-11 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec"
                ></img>
              </div>
            </div>
          </div>

          <div className="link origin-top relative  border-b border-gray-400">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center leading-[0.8] lg:pt-5 pt-2 uppercase">
              Contact
            </h1>

            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <Link to='/*' onClick={useGSAP()} className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center   uppercase">
                  Pour envoyer un fax
                </h2>
                <div className="lg:text-[8vw] text-4xl lg:px-4 px-2">&#9829;</div>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center   uppercase">
                  Pour envoyer un fax
                </h2>
                <div className="lg:text-[8vw] text-4xl lg:px-4 px-2">&#9829;</div>
              </Link>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center    uppercase">
                  Pour envoyer un fax
                </h2>
                <div className="lg:text-[8vw]   text-4xl lg:px-4 px-2">&#9829;</div>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-3xl text-center   uppercase">
                  Pour envoyer un fax
                </h2>
                <div className="lg:text-[8vw] text-4xl lg:px-4 px-2">&#9829;</div>
              </div>
            </div>
          </div>

          <div className="link origin-top relative  border-b border-gray-400">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center leading-[0.8] lg:pt-5 pt-2 uppercase">
              Blogue
            </h1>

            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <Link to='/*' onClick={useGSAP()}  className="moveX flex  items-center">
               <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8]   lg:pt-5 uppercase">
                  lire les articles
                </h2>

                
                <img className=" lg:h-22  h-9 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8]   lg:pt-5 uppercase">
                  lire les articles
                </h2>

                
                <img className=" lg:h-22  h-10 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                ></img>
              </Link>
              <div className="moveX flex  items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8]   lg:pt-5 uppercase">
                  lire les articles
                </h2>

                
                <img className=" lg:h-22  h-9 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5"
                ></img>
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-3xl pt-2 text-center lg:leading-[0.8]   lg:pt-5 uppercase">
                  lire les articles
                </h2>

                
                <img className=" lg:h-22  h-10 shrink-0 lg:w-60 w-24 rounded-full  object-cover"
                  src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
