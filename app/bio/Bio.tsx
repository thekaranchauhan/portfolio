import AnimatedBody from "../animations/AnimatedBody";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";

const Bio = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-6 md:pt-20 md:pb-6 lg:pt-20 lg:pb-6"
      id="bio"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "MESMERIZING UI/UX, POWERFUL APPS & THINKING BUSINESS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Been working as freelancer since 2017 around the globe gave me eminent exposure to working on different tech stack."
              }
            />
            <AnimatedBody
              text={
                "Additionally, working with different clients and their requirements helped me to understand the business and its needs. Therefore, in recent years I have been part of many stealth startups and volunteer programs."
              }
            />
            <AnimatedBody
              text={
                "Talking about the design perspective, I have been constantly studying latest UI and UX trends. Studying human psychology and its behavior towards the product and web applications."
              }
            />
            <AnimatedBody
              text={
                "Currently I am working on SaaS platform called Docvi. Docvi addresses security concerns, facilitates collaboration, supports digital transformation, ensures compliance, streamlines document signing, enables effective access control, provides transparency, offers brand customization, and ensures secure communication."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Main Tech Stack"}
                className={
                  "text-[24px] text-[#dfa878] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "TypeScript, React, Next.js, Python, Ruby, Go, Redux, Testing Libraries, WordPress, MongoDB, ExpressJs, Node, VueJs, Docker, GraphQL, SQL, Prisma."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#dfa878] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator, Sketch."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;