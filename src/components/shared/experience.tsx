import { Badge } from "../ui/badge";
import { Card, CardContent } from "@/components/ui/card";


import { Experiences } from "../../../constants/index";
const Experience = () => {
  return (
    <div className="Experience-section flex items-center justify-center w-full py-24 md:py-16 px-2 container">
      <div className="Experience flex flex-col items-center justify-center w-full gap-y-12">
        <div className="flex flex-col items-center justify-center">
          <Badge
            variant="default"
            className="rounded-xl bg-accent text-foreground py-1 px-4"
          >
            Experience
          </Badge>
          <h2 className="text-lg font-medium text-foreground/65 mt-4 text-center">
            Here is a quick summary of my most recent experiences:
          </h2>
        </div>
        <div className="experience-row flex flex-col items-center justify-center w-full gap-y-12">
          {Experiences.map((card) =>(
            <Card className="rounded-xl" 
            data-aos={card.movement}
            data-aos-duration={card.duration}>
            <CardContent className="grid grid-cols-4 items-center justify-center p-8 bg-foreground/10 rounded-xl md:grid-cols-1 md:gap-y-4">
              <div className="flex h-full items-start justify-start">
                <h1 className="text-foreground flex font-bold items-center justify-center gap-1">
                  <img src={card.logo} alt="logo" className="w-7 rounded-full" />
                  {card.logoName}
                </h1>
              </div>
              <div className="flex items-center justify-between flex-col col-span-2 max-w-[384px] gap-y-4">
                <h4 className="text-xl font-semibold text-start w-full">
                 {card.job}
                </h4>
                <ul
                  role="list"
                  className="marker:text-foreground/65 text-foreground/65 text-base list-disc pl-4"
                >
                  {card.works.map((work) =>(
                    <li>{work.work}</li>
                  ))}
                </ul>
              </div>
              <div className="flex h-full items-start justify-end md:justify-start">
                <h1 className="text-foreground/65 flex font-normal items-center justify-center gap-0.5">
                {card.when}
                </h1>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
