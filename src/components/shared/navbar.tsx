// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";
import { MdClose } from "react-icons/md";
import { Separator } from "../ui/separator";
import file from "../../assets/Xumoyun's Resume.pdf"

const Navbar = () => {
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById(
      "my-drawer"
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="Navbar-section w-full container md:px-0">
      <div className="Navbar-section flex w-full py-4 items-center justify-between md:px-4">
        <div className="nav-logo">
          <Link to={"/"}>
            <h1 className="text-3xl font-bold">{`<QX />`}</h1>
          </Link>
        </div>
        <div className="nav-right flex gap-12 items-center md:hidden">
          <div className="nav-menu">
            <ul className="flex gap-6">
              <li className="hover:text-blue-700 ease-in-out duration-150">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-blue-700 ease-in-out duration-150">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  Works
                </Link>
              </li>
              <li className="hover:text-blue-700 ease-in-out duration-150">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  Testimonials
                </Link>
              </li>
              <li className="hover:text-blue-700 ease-in-out duration-150">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <ModeToggle />

            <a href={file} download="Xumoyun_Resume.pdf">
              <Button className="rounded-xl h-[36px]" type="button">
                Download CV
              </Button>
            </a>
          </div>
        </div>
        <div className="nav-right-mobile md:flex 2xl:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-transparent border-0 drawer-button px-2"
              >
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <clipPath id="clip3_693">
                      <rect
                        id="Name=icon-menu, Size=24, Theme Mode=Dark"
                        width="24.000000"
                        height="24.000000"
                        fill="white"
                        fill-opacity="0"
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id="Name=icon-menu, Size=24, Theme Mode=Dark"
                    width="24.000000"
                    height="24.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <g clip-path="url(#clip3_693)">
                    <path
                      id="Vector"
                      d="M4 12L20 12"
                      className="stroke-foreground"
                      stroke="#fff"
                      stroke-opacity="1.000000"
                      stroke-width="2.000000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M4 6L20 6"
                      className="stroke-foreground"
                      stroke="#fff"
                      stroke-opacity="1.000000"
                      stroke-width="2.000000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      className="stroke-foreground"
                      d="M4 18L20 18"
                      stroke="#fff"
                      stroke-opacity="1.000000"
                      stroke-width="2.000000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
              </label>
            </div>
            <div className="drawer-side z-20">
              <label
                htmlFor="my-drawer"
                className="absolute top-2 right-0 rounded-md z-20 btn btn-ghost"
              >
                <MdClose size={25} />
              </label>

              <div className="bg-background menu p-0  gap-4 w-full min-h-full">
                <div className="">
                  <div className="nav-head z-20 w-full pb-5 p-4">
                    <div className="nav-logo">
                      <h1 className="text-2xl font-bold">{`<QX />`}</h1>
                    </div>
                  </div>
                  <Separator />
                </div>
                <ul className="text-foreground">
                  {/* Sidebar content here */}
                  <li className="hover:text-blue-700 ease-in-out duration-150">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      onClick={closeDrawer} // Close the drawer
                    >
                      About
                    </Link>
                  </li>
                  <li className="hover:text-blue-700 ease-in-out duration-150">
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      onClick={closeDrawer} // Close the drawer
                    >
                      Works
                    </Link>
                  </li>
                  <li className="hover:text-blue-700 ease-in-out duration-150">
                    <Link
                      to="testimonials"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      onClick={closeDrawer} // Close the drawer
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="hover:text-blue-700 ease-in-out duration-150">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      onClick={closeDrawer} // Close the drawer
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="w-full flex flex-col items-start">
                  <Separator />
                  <div className="w-full mt-4 flex flex-col px-4">
                    <ModeToggle />

                    <a href={file}  download="Xumoyun_Resume.pdf">
                      <Button
                        className="rounded-xl h-[36px] bg-foreground mt-14 w-full"
                        type="submit"
                      >
                        Download CV
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
