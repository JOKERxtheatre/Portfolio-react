import { Badge } from "../ui/badge";
import { useCopyToClipboard } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
  const { toast } = useToast();
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
        toast({
          variant: "default",
          title: "Clipboard Copied",
        });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
        console.log(copiedText);
      });
  };
  return (
    <div className="GetInTouch-section flex items-center justify-center w-full py-24 md:py-16 px-2 container" id="contact">
      <div className="GetInTouch flex flex-col items-center justify-center w-full gap-y-12 md:gap-y-6">
        <div className="flex flex-col items-center justify-center">
          <Badge
            variant="default"
            className="rounded-xl bg-accent text-foreground py-1 px-4"
          >
            Get in touch
          </Badge>
          <h2 className="text-lg font-medium text-foreground/65 mt-4 text-center max-w-[576px]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </h2>
        </div>
        <div className="copy-row flex flex-col gap-y-5 md:gap-y-2">
          <h1 className="flex items-center justify-center gap-x-4 text-4xl md:text-lg md:gap-x-1">
            <svg 
            className="md:w-[20px] md:h-[20px]"
              width="32.000000"
              height="32.000000"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip327_2125">
                  <rect
                  className="fill-foreground"
                    id="Icon"
                    width="32.000000"
                    height="32.000000"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                  className="fill-foreground"
                id="Icon"
                width="32.000000"
                height="32.000000"
                fill-opacity="0"
              />
              <g clip-path="url(#clip327_2125)">
                <path
                  id="Vector"
                  d="M26.66 5.33C28.13 5.33 29.33 6.52 29.33 8L29.33 24C29.33 25.47 28.13 26.66 26.66 26.66L5.33 26.66C3.86 26.66 2.66 25.47 2.66 24L2.66 8C2.66 6.52 3.86 5.33 5.33 5.33L26.66 5.33Z"
                  
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M29.33 9.33L17.37 16.93C16.96 17.19 16.48 17.32 16 17.32C15.51 17.32 15.03 17.19 14.62 16.93L2.66 9.33"
                  
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
            kadambaevhumoun@gmail.com
            <svg
            className="md:w-[20px] md:h-[20px]"
              onClick={handleCopy("kadambaevhumoun@gmail.com")}
              width="32.000000"
              height="32.000000"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip28_313">
                  <rect
                    id="Name=icon-copy, Size=32, Theme Mode=Dark"
                    width="32.000000"
                    height="32.000000"
                    
                  className="fill-foreground"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Name=icon-copy, Size=32, Theme Mode=Dark"
                width="32.000000"
                height="32.000000"
                
                className="fill-foreground"
                fill-opacity="0"
              />
              <g clip-path="url(#clip28_313)">
                <path
                  id="Vector"
                  d="M26.66 10.66C28.13 10.66 29.33 11.86 29.33 13.33L29.33 26.66C29.33 28.13 28.13 29.33 26.66 29.33L13.33 29.33C11.86 29.33 10.66 28.13 10.66 26.66L10.66 13.33C10.66 11.86 11.86 10.66 13.33 10.66L26.66 10.66Z"
                  
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M5.33 21.33C3.86 21.33 2.66 20.13 2.66 18.66L2.66 5.33C2.66 3.86 3.86 2.66 5.33 2.66L18.66 2.66C20.13 2.66 21.33 3.86 21.33 5.33"
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </h1>
          <h1 className="flex items-center justify-center gap-x-4 text-4xl  md:text-sm md:gap-x-2">
            <svg
            className="md:w-[20px] md:h-[20px]"
              width="32.000000"
              height="32.000000"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip327_2129">
                  <rect
                    id="Icon"
                    width="32.000000"
                    height="32.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Icon"
                width="32.000000"
                height="32.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip327_2129)">
                <path
                  id="Vector"
                  d="M29.33 26.56C29.33 26.93 29.25 27.29 29.1 27.63C28.96 27.97 28.74 28.28 28.46 28.53C28.19 28.78 27.87 28.97 27.52 29.09C27.16 29.21 26.79 29.26 26.42 29.22C22.32 28.78 18.38 27.37 14.91 25.13C11.69 23.08 8.96 20.35 6.91 17.13C4.66 13.65 3.26 9.69 2.82 5.57C2.79 5.2 2.83 4.83 2.95 4.48C3.07 4.13 3.26 3.8 3.51 3.53C3.76 3.26 4.06 3.04 4.4 2.89C4.74 2.74 5.1 2.66 5.47 2.66L9.47 2.66C10.12 2.66 10.75 2.88 11.24 3.31C11.73 3.73 12.05 4.31 12.14 4.95C12.31 6.24 12.62 7.49 13.08 8.7C13.25 9.18 13.29 9.7 13.19 10.2C13.08 10.69 12.83 11.15 12.48 11.52L10.78 13.21C12.68 16.55 15.44 19.31 18.78 21.21L20.48 19.52C20.84 19.16 21.3 18.91 21.79 18.8C22.29 18.7 22.81 18.74 23.29 18.91C24.5 19.37 25.75 19.68 27.04 19.85C27.68 19.94 28.27 20.27 28.7 20.77C29.12 21.26 29.34 21.9 29.33 22.56L29.33 26.56Z"
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            +998 99 090 34 56
            <svg
            className="md:w-[20px] md:h-[20px]"
              onClick={handleCopy("+998 99 090 34 56")}
              width="32.000000"
              height="32.000000"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip28_313">
                  <rect
                    id="Name=icon-copy, Size=32, Theme Mode=Dark"
                    width="32.000000"
                    height="32.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Name=icon-copy, Size=32, Theme Mode=Dark"
                width="32.000000"
                height="32.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip28_313)">
                <path
                  id="Vector"
                  d="M26.66 10.66C28.13 10.66 29.33 11.86 29.33 13.33L29.33 26.66C29.33 28.13 28.13 29.33 26.66 29.33L13.33 29.33C11.86 29.33 10.66 28.13 10.66 26.66L10.66 13.33C10.66 11.86 11.86 10.66 13.33 10.66L26.66 10.66Z"
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M5.33 21.33C3.86 21.33 2.66 20.13 2.66 18.66L2.66 5.33C2.66 3.86 3.86 2.66 5.33 2.66L18.66 2.66C20.13 2.66 21.33 3.86 21.33 5.33"
                  className="stroke-foreground"
                  stroke-opacity="1.000000"
                  stroke-width="2.000000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </h1>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
            <h3 className="text-foreground/80 text-center">You may also find me on these platforms!</h3>
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
      </div>
    </div>
  );
};

export default GetInTouch;
