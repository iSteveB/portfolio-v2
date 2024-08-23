import ProjectCard from "../ui/ProjectCard";
import projectsData from "../../data/projects.json";

const BentoGrid = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-none py-20'>
      <div className='grid size-full gap-3 lg:grid-cols-4 lg:grid-rows-3'>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
