import SnippetCard from "./SnippetCard";
import { SnippetProps, snippets } from "./snippetDetails";
import AnimatedText2 from "../animations/AnimatedText2";
import { monaSans } from "../fonts/monaSans";

const SnippetGrid = () => {
  return (
    <>
      <AnimatedText2
        title={"Snips"}
        style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px] mb-10 sm:mb-20 md:mb-24 lg:mb-28`}
      />
      <div className="grid w-[90%] grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1200px]">
        {snippets.map((project: SnippetProps, index) => (
          <SnippetCard
            key={index} // Ensure each child in a list has a unique "key" prop
            name={project.name}
            description={project.description}
            demo={project.demo}
          />
        ))}
      </div>
    </>
  );
};

export default SnippetGrid;
