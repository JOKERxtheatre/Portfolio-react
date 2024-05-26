import { Badge } from "../ui/badge";
import Me from "@/assets/Без названия16_20231221203142.png";

const About = () => {
  return (
    <div
      className="About-section flex items-center justify-center w-full py-24 md:py-16 px-2 container"
      id="about"
    >
      <div className="About flex flex-col items-center justify-center w-full">
        <Badge
          variant="default"
          className="rounded-xl bg-accent text-foreground py-1 px-4"
        >
          About me
        </Badge>
        <div className="flex items-center justify-between pt-12 w-full md:flex-col max-w-[1216px]">
          <div className="about-image flex items-start justify-start w-[584px] h-[694px]  md:hidden ">
            <div
              className="flex items-center justify-center w-[400px] h-[400px] border-[8px] border-background ml-10 z-10"
              data-aos="fade-up-right"
              data-aos-duration="1500"
            >
              <img src={Me} alt="my=image" className="w-full" />
            </div>
            <div className="flex items-center justify-center w-[400px] h-[400px] border-[8px] border-background absolute bg-accent-foreground/25 mt-10"></div>
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
          <div className="text max-w-[584px] text-foreground/65 gap-4 flex flex-col mt-10">
            <h1 className="text-3xl font-semibold text-foreground pb-2">
              Curious about me? Here you have it:
            </h1>
            <h3>
              I'm a passionate, self-motivated designer specializing in
              near-full-stack development (React.js & Node.js, Express.js). I am
              passionate about bringing the technical and visual aspects of
              digital products to life. User experience, pixel-perfect design,
              and writing clear, readable, high-performance code are all
              important to me.
            </h3>
            <h3>
              I started my journey as a web developer in 2023 and since then I
              have continued to grow and develop as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, since I started my web development journey at the early age
              of sixteen, I have been building modern web applications using
              modern technologies like Next.js, TypeScript, Express.js,
              Tailwindcss, JavaScript and many more.
            </h3>
            <h3>
              I am a very forward thinker and enjoy working on products from
              idea to development.
            </h3>
            <h3>
              When I'm not in full developer mode, you can find me scrolling
              through instagram or telegram, witnessing the journey of startups,
              or spending my free time. You can follow me on Instagram where I
              share tech tidbits and build in public, or you can follow me on
              GitHub.
            </h3>
            <h3>Finally, some quick bits about me.</h3>
            <div className="flex items-center justify-between">
              <ul
                role="list"
                className="marker:text-foreground/65 list-disc pl-4"
              >
                <li>Jr. Web developer</li>
                <li>Part-time freelancer</li>
              </ul>
              <ul role="list" className="marker:text-foreground/65 list-disc">
                <li>Avid learner</li>
                <li>Senior aspiring</li>
              </ul>
            </div>
            <h3>
              Last thing, I'm available to work with the team, so feel free to
              reach out and say hi! I promise I won't bite 😉
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
