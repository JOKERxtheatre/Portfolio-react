import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Works } from "../../../constants/index";

const Work = () => {
  return (
    <div className="Work-section flex items-center justify-center w-full py-24 md:py-16 px-2 container">
      <div className="Work flex flex-col items-center justify-center w-full gap-y-12">
        <div className="flex flex-col items-center justify-center">
          <Badge
            variant="default"
            className="rounded-xl bg-accent text-foreground py-1 px-4"
          >
            Work
          </Badge>
          <h2 className="text-lg font-medium text-foreground/65 mt-4 text-center">
            Some of the noteworthy projects I have built:
          </h2>
        </div>
        <div className="works-row flex flex-col items-center justify-center w-full gap-y-12">
          {Works.map((card) => (
            <Card
              className="rounded-xl"
              data-aos={card.movement}
              data-aos-duration={card.duration}
            >
              <CardContent className="grid grid-cols-2 items-center justify-center rounded-xl p-0 md:grid-cols-1">
                <div className="flex items-center justify-center p-12 md:p-8 h-full w-full max-w-[576px] bg-foreground/20 rounded-tl-xl rounded-bl-xl md:rounded-tr-xl md:rounded-bl-none">
                  <img
                    src={card.image}
                    alt="image"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="flex items-start justify-start p-12 md:p-8 gap-y-6 flex-col w-full h-full max-w-[576px] bg-foreground/10 rounded-tr-xl rounded-br-xl md:rounded-tr-none md:rounded-bl-xl">
                  <h2 className="text-xl font-medium">{card.title}</h2>
                  <p className="text-foreground/60">{card.text}</p>
                  <div className="flex flex-wrap gap-2 max-w-[480px]">
                    {card.works.map((badge) => (
                      <Badge className="bg-foreground/25 text-foreground">
                        {badge.work}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    target="_blank"
                    to={card.link}
                    className="hover:scale-125 ease-linear duration-150"
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
                        <clipPath id="clip28_466">
                          <rect
                            id="Name=icon-external-link, Size=24, Theme Mode=Light"
                            width="24.000000"
                            height="24.000000"
                            fill="white"
                            fill-opacity="0"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        id="Name=icon-external-link, Size=24, Theme Mode=Light"
                        width="24.000000"
                        height="24.000000"
                        fill="#FFFFFF"
                        fill-opacity="0"
                      />
                      <g clip-path="url(#clip28_466)">
                        <path
                          id="Vector"
                          d="M18 13L18 19C18 19.53 17.78 20.03 17.41 20.41C17.03 20.78 16.53 21 16 21L5 21C4.46 21 3.96 20.78 3.58 20.41C3.21 20.03 3 19.53 3 19L3 8C3 7.46 3.21 6.96 3.58 6.58C3.96 6.21 4.46 6 5 6L11 6"
                          stroke="#4B5563"
                          stroke-opacity="1.000000"
                          stroke-width="2.000000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                        <path
                          id="Vector"
                          d="M15 3L21 3L21 9"
                          stroke="#4B5563"
                          stroke-opacity="1.000000"
                          stroke-width="2.000000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                        <path
                          id="Vector"
                          d="M10 14L21 3"
                          stroke="#4B5563"
                          stroke-opacity="1.000000"
                          stroke-width="2.000000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
