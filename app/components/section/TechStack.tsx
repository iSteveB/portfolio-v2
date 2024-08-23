import Collapse from '../ui/Collapse';
import reactIcon from '../../../public/icons/react.svg';
import nodeIcon from '../../../public/icons/nodejs.svg';
import expressIcon from '../../../public/icons/express.svg';
import nestjsIcon from '../../../public/icons/nestjs.svg';
import typescriptIcon from '../../../public/icons/typescript.svg';
import sassIcon from '../../../public/icons/sass.svg';
import nextjsIcon from '../../../public/icons/nextjs.svg';
import tailwindIcon from '../../../public/icons/tailwind.svg';
import reduxToolkitIcon from '../../../public/icons/redux.svg';
import mongodbIcon from '../../../public/icons/mongodb.svg';
import postgresqlIcon from '../../../public/icons/postgresql.svg';
import prismaIcon from '../../../public/icons/prisma.svg';
import githubIcon from '../../../public/icons/github.svg';
import javascriptIcon from '../../../public/icons/javascript.svg';
import sanityIcon from '../../../public/icons/sanity.svg';
import figmaIcon from '../../../public/icons/figma.svg';
import notionIcon from '../../../public/icons/notion.svg';
import jiraIcon from '../../../public/icons/jira.svg';
import postmanIcon from '../../../public/icons/postman.svg';

const TechStack = () => {
	const frontendStack = [
		{ name: 'React', icon: reactIcon },
		{ name: 'JavaScript', icon: javascriptIcon },
		{ name: 'TypeScript', icon: typescriptIcon },
		{ name: 'Sass', icon: sassIcon },
		{ name: 'Next.js', icon: nextjsIcon },
		{ name: 'Tailwind CSS', icon: tailwindIcon },
		{ name: 'Redux Toolkit', icon: reduxToolkitIcon },
	];

	const backendStack = [
		{ name: 'Node.js', icon: nodeIcon },
		{ name: 'Express', icon: expressIcon },
		{ name: 'NestJS', icon: nestjsIcon },
		{ name: 'Sanity', icon: sanityIcon },
		{ name: 'Prisma', icon: prismaIcon },
	];

	const databaseStack = [
		{ name: 'MongoDB', icon: mongodbIcon },
		{ name: 'PostgreSQL', icon: postgresqlIcon },
	];

	const toolsStack = [
		{ name: 'GitHub', icon: githubIcon },
		{ name: 'Figma', icon: figmaIcon },
		{ name: 'Notion', icon: notionIcon },
		{ name: 'Jira', icon: jiraIcon },
    { name: 'Postman', icon: postmanIcon },
	];

	return (
		<div className='flex flex-col flex-wrap gap-4 py-20'>
			<div className='flex flex-col gap-4 lg:w-full lg:flex-row'>
				<div className='w-full'>
					<Collapse title='Frontend' stackItems={frontendStack} />
				</div>
				<div className='w-full'>
					<Collapse title='Backend' stackItems={backendStack} />
				</div>
			</div>
			<div className='flex flex-col gap-4 lg:w-full lg:flex-row'>
				<div className='w-full'>
					<Collapse title='Database' stackItems={databaseStack} />
				</div>
				<div className='w-full'>
					<Collapse title='Outils' stackItems={toolsStack} />
				</div>
			</div>
		</div>
	);
};

export default TechStack;
