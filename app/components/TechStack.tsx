import Collapse from './ui/Collapse';
import reactIcon from '../../public/react.svg';
import nodeIcon from '../../public/nodejs.svg';
import expressIcon from '../../public/express.svg';
import nestjsIcon from '../../public/nestjs.svg';
import typescriptIcon from '../../public/typescript.svg';
import sassIcon from '../../public/sass.svg';
import nextjsIcon from '../../public/nextjs.svg';
import tailwindIcon from '../../public/tailwind.svg';
import reduxToolkitIcon from '../../public/redux.svg';
import mongodbIcon from '../../public/mongodb.svg';
import postgresqlIcon from '../../public/postgresql.svg';
import prismaIcon from '../../public/prisma.svg';
import githubIcon from '../../public/github.svg';
import javascriptIcon from '../../public/javascript.svg';
import sanityIcon from '../../public/sanity.svg';
//import figmaIcon from '../../public/figma.svg';
// import notionIcon from '../../public/notion.svg';
// import jiraIcon from '../../public/jira.svg';
// import postmanIcon from '../../public/postman.svg';

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
		//{ name: 'Figma', icon: figmaIcon },
		// { name: 'Notion', icon: notionIcon },
		// { name: 'Jira', icon: jiraIcon },
    // { name: 'Postman', icon: postmanIcon },
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
