import Lottie from "lottie-react";
import HI from "@/assets/Animation - 1714226094945 (1).json";
import Dot from "@/assets/Animation - 1714227535168.json";
import Me from "@/assets/Без названия16_20231221203142.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="header-section flex items-center justify-center w-full py-24 md:py-16 container">
      <div className="header flex  justify-between items-center md:flex-col-reverse md:px-2 md:gap-12">
        <div className="header-text flex flex-col gap-12">
          <div className="">
            <h1 className="text-[60px] font-bold flex md:text-4xl">
              <Lottie
                animationData={HI}
                loop={true}
                className="w-[100px] h-[100px] -ml-3.5 md:w-[70px] md:h-[70px] md:-mt-3 stroke-foreground stroke-2"
              />
              I’m Xumoyun <span className="md:hidden">👋</span>
            </h1>
            <h4 className="font-light max-w-[768px]">
            I specialize in front-end development, creating fast, accessible, and visually appealing websites that provide exceptional digital experiences. Although I'm not yet a full-stack developer, I'm close to reaching that goal. With one year of experience in web development, I continue to find excitement in every project as if it were my first.
            </h4>
          </div>
          <div className="adress flex flex-col gap-2">
            <h3 className="flex items-center justify-start gap-2 font-light">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip327_1815">
                    <rect
                    
                      id="Icon"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                className="fill-foreground"
                  id="Icon"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <g clip-path="url(#clip327_1815)">
                  <path
                    id="Vector"
                    d="M12 22C12 22 4 16 4 10C4 7.87 4.84 5.84 6.34 4.34C7.84 2.84 9.87 2 12 2C14.12 2 16.15 2.84 17.65 4.34C19.15 5.84 20 7.87 20 10C20 16 12 22 12 22Z"
                    stroke="#D1D5DB"
                    className="stroke-foreground"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M12 13C10.34 13 9 11.65 9 10C9 8.34 10.34 7 12 7C13.65 7 15 8.34 15 10C15 11.65 13.65 13 12 13Z"
                    stroke="#D1D5DB"
                    className="stroke-foreground"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
              Uzbekistan, Tashkent
            </h3>
            <h3 className="flex items-center justify-start gap-2 font-light">
              <Lottie
                animationData={Dot}
                loop={true}
                className="w-[23px] h-[20px]"
              />
              Available for new projects
            </h3>
          </div>
          <div className="icons flex gap-4">
            <Link
              to={"https://twitter.com/JOKERxtheatre"}
              className="Twit"
              target="_blank"
            >
              <svg
                className="hover:scale-125 ease-linear duration-150"
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="clip3_588">
                    <rect
                      id="Name=icon-twitter, Size=24, Theme Mode=Dark"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Name=icon-twitter, Size=24, Theme Mode=Dark"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <g clip-path="url(#clip3_588)">
                  <path
                    id="Vector"
                    className="stroke-foreground"
                    d="M20 7.39C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.39 18.4 8 17C3 15.5 0.5 9.59 3 4.99C5.2 7.59 8.6 9.09 12 8.99C11.1 4.79 16 2.39 19 5.19C20.1 5.19 22 3.99 22 3.99C22 3.99 21.29 6.09 20 7.39Z"
                    stroke="#fff"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Link>
            <Link
              to={"https://github.com/JOKERxtheatre"}
              className="Git"
              target="_blank"
            >
              <svg
                className="hover:scale-125 ease-linear duration-150 "
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs>
                  <clipPath id="clip3_575">
                    <rect
                      id="Icon"
                      width="24.000000"
                      height="24.000000"
                      fill="white"
                      fill-opacity="0"
                    />
                  </clipPath>
                </defs>
                <rect
                  id="Icon"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <g clip-path="url(#clip3_575)">
                  <path
                className="stroke-foreground"
                    id="Vector"
                    d="M15 22L15 18C15.13 16.74 14.77 15.49 14 14.5C17 14.5 20 12.5 20 9C20.07 7.75 19.73 6.52 19 5.5C19.27 4.35 19.27 3.15 19 2C19 2 18 2 16 3.5C13.35 3 10.63 3 8 3.5C6 2 5 2 5 2C4.69 3.15 4.69 4.35 5 5.5C4.27 6.51 3.91 7.75 4 9C4 12.5 7 14.5 10 14.5C9.6 14.99 9.31 15.55 9.14 16.15C8.97 16.75 8.92 17.37 9 18L9 22"
                    stroke="#fff"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                  <path
                className="stroke-foreground"
                    id="Vector"
                    d="M9 18C4.49 20 4 16 2 16"
                    stroke="#D1D5DB"
                    stroke-opacity="1.000000"
                    stroke-width="2.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </Link>
            <Link
              to={"https://www.instagram.com/xum0yun.x/"}
              target="_blank"
              className="fig"
            >
              <FaInstagram className="text-[25px] hover:scale-125 ease-linear duration-150 " />
            </Link>
          </div>
        </div>
        <div className="header-image flex items-end justify-end w-[400px] h-[270px]  md:hidden ">
          <div
            className="flex items-center justify-center w-[272px] h-[272px] border-[8px] border-background mb-10 mr-10 z-10"
            data-aos="fade-up-left"
            data-aos-duration="1500"
          >
            <img src={Me} alt="my=image" className="w-full" />
          </div>
          <div className="flex items-center justify-center w-[272px] h-[272px] border-[8px] border-background absolute bg-accent-foreground/25"></div>
        </div>
        <div className="header-image flex items-end justify-center w-[300px] h-[270px] 2xl:hidden md:flex">
          <div
            className="flex items-center justify-center w-[272px] h-[272px] border-[8px] border-background z-10 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={Me} alt="my=image" className="w-full" />
          </div>
          <div className="flex items-center justify-center w-[312px] h-[272px] border-[8px] border-background absolute bg-accent-foreground/25"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
