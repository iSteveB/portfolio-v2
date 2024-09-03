import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projects.json";

const BentoGrid = () => {
  return (
    <div className='flex w-full items-center justify-center bg-none px-10 py-20 lg:h-screen lg:px-0'>
      <div className='grid size-full grid-flow-row grid-cols-1 gap-3 lg:grid-cols-4 lg:grid-rows-3'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
