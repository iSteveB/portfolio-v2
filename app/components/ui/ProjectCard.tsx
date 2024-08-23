type ProjectCardProps = {
  title: string;
  size: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, size, color }) => {
  const sizeClasses: { [key: string]: string } = {
    small: 'col-span-1 row-span-1 text-5xl',
    large: 'col-span-2 row-span-1 text-7xl',
  };

  const colorClasses: { [key: string]: string } = {
    primary: 'bg-accent-100',
    secondary: 'bg-neutral',
    tertiary: 'border-4 border-accent-100 bg-base-700 text-accent-100',
  };

  return (
    <div className={`flex cursor-pointer items-center justify-center rounded-lg ${sizeClasses[size]} ${colorClasses[color]}`}>
      {title}
    </div>
  );
};

export default ProjectCard;