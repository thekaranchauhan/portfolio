import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedText2 from "../animations/AnimatedText2";
import { monaSans } from "../fonts/monaSans";

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
    <AnimatedText2
          title={"Work"}
          style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px] mb-10 sm:mb-20 md:mb-24 lg:mb-28`}
        />
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
    </>
  );
};

export default ProjectGrid;