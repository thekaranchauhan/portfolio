import LinkedinCard from "./LinkedinCard";
import { LinkedinProps, linkedin } from "./linkedinDetails";
import AnimatedText2 from "../animations/AnimatedText2";
import { monaSans } from "../fonts/monaSans";

const LinkedinGrid = () => {
  return (
    <>
      <AnimatedText2
        title={"Linkedin"}
        style={`flex max-w-[500px] flex-col items-center justify-center text-left text-[100px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px] mb-10 sm:mb-20 md:mb-24 lg:mb-28`}
      />
      <div className="grid w-[90%] grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1200px]">
        {linkedin.map((project: LinkedinProps, index) => (
          <LinkedinCard
            key={index} // Ensure each child in a list has a unique "key" prop
            name={project.name}
            designation={project.designation}
            recommendation={project.recommendation}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default LinkedinGrid;
