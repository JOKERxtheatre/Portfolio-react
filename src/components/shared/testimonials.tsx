import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { testimonials } from "../../../constants/index";

const Testimonials = () => {
  return (
    <div className="Testimonials-section flex items-center justify-center w-full py-24 md:py-16 px-2 container">
      <div className="Testimonials flex flex-col items-center justify-center w-full gap-y-12">
        <div className="flex flex-col items-center justify-center">
          <Badge
            variant="default"
            className="rounded-xl bg-accent text-foreground py-1 px-4"
          >
            Testimonials
          </Badge>
          <h2 className="text-lg font-medium text-foreground/65 mt-4 text-center">
            Nice things people have said about me:
          </h2>
        </div>
        <div className="testimonials-row grid grid-cols-3 gap-x-12 md:grid-cols-1 md:gap-y-6">
          {testimonials.map((card) => (
            <Card
              className="rounded-xl"
              data-aos={card.movement}
              data-aos-duration={card.duration}
            >
              <CardContent className="flex items-center justify-start p-12 gap-y-6 flex-col bg-foreground/10 max-w-[374px] rounded-xl h-full">
                <div className="flex items-center justify-center w-full">
                  <img
                    src={card.img}
                    alt="img"
                    className="rounded-full max-w-[64px]"
                  />
                </div>
                <div className="flex w-full items-start justify-start">
                  <p className="text-foreground/60">{card.text}</p>
                </div>
                <div className="flex flex-col gap-y-1 w-full items-center">
                  <h3 className="text-xl font-semibold">{card.name}</h3>
                  <h5 className="text-foreground/60 text-sm">{card.founder}</h5>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
