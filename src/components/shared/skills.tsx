import { Badge } from "../ui/badge";

import { Texnologies } from "../../../constants/index";

const Skills = () => {
  return (
    <div className="Skills-section flex items-center justify-center w-full py-24 md:py-16 px-2 container">
      <div className="Skills flex flex-col items-center justify-center w-full">
        <Badge
          variant="default"
          className="rounded-xl bg-accent text-foreground py-1 px-4"
        >
          Skills
        </Badge>
        <h2 className="text-lg font-medium text-foreground/65 mt-4 text-center">
          The skills, tools and technologies I am really good at:
        </h2>
        <div className="Skills-body flex flex-col items-center justify-center w-full mt-12">
          <div className="Skills-row grid grid-flow-row grid-cols-6 gap-x-24 gap-y-12 md:grid-cols-3 md:gap-x-10 md:gap-y-4">
            {Texnologies.map((item, index) => (
              <div
                data-aos={item.movement}
                data-aos-duration={item.duration}
                key={index}
                className="flex flex-col gap-2 items-center justify-center md:hidden"
              >
                {item.svg}
                <h4 className="text-lg text-foreground/65 font-medium md:text-base">
                  {item.name}
                </h4>
              </div>
            ))}
            {Texnologies.map((item, index) => (
              <div
                data-aos={item.movement2}
                data-aos-duration={item.duration2}
                key={index}
                className="flex flex-col gap-2 items-center justify-center md:flex 2xl:hidden"
              >
                {item.svg}
                <h4 className="text-lg text-foreground/65 font-medium md:text-base">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
