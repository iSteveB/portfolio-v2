'use client';
import React from 'react';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalTrigger,
} from '../ui/animated-modal';
import Image from 'next/image';
import Link from 'next/link';
import { getPictureURL, getIconURL } from '../../utils/getImageURL';
import Tooltip from '../ui/Tooltip';

type ProjectCardProps = {
	title: string;
	size: string;
	color: string;
	image: string;
	url: string;
	github: string;
	description: string;
	stack: string[];
	objectives: string[];
	role: string;
	challenges: { description: string; solution: string }[];
	inProgress: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	size,
	color,
	image,
	url,
	github,
	description,
	stack,
	objectives,
	role,
	challenges,
	inProgress,
}) => {
	const sizeClasses: { [key: string]: string } = {
		small: 'col-span-1 row-span-1 text-5xl',
		large: 'col-span-2 row-span-1 text-7xl',
	};

	const colorClasses: { [key: string]: string } = {
		primary: 'bg-accent-100',
		secondary: 'bg-neutral',
		tertiary: 'border-4 border-accent-100 bg-base-700 text-accent-100',
	};

	const projectPicture = getPictureURL(image);

	return (
		<div
			className={`flex cursor-pointer items-center justify-center rounded-lg ${sizeClasses[size]} ${colorClasses[color]}`}>
			<Modal>
				<ModalTrigger className='size-full'>{title}</ModalTrigger>
				<ModalBody className='flex size-full items-center bg-base-700'>
					<ModalContent className='w-full overflow-scroll text-neutral'>
						<div className='relative'>
							<Image
								className='aspect-video w-full object-contain'
								src={projectPicture}
								alt={title}
								width={500}
								height={100}
							/>
							<div className='absolute right-4 top-4 flex gap-4 text-2xl text-accent-100'>
								{inProgress && <span className='rounded-full bg-base-700 px-4'>
									En cours
								</span>}
								<span className='rounded-full bg-base-700 px-4'>
									{role}
								</span>
							</div>
						</div>
						<div className='flex flex-col gap-2 p-4 text-neutral'>
							<div className='flex flex-wrap items-center justify-between gap-2'>
								<h3 className='text-5xl text-accent-100'>{title}</h3>
								<div className='flex flex-wrap gap-2'>
									{stack.map((stackItem) => (
										<Tooltip
											key={stackItem}
											tooltip={stackItem}>
											<Image
												src={getIconURL(stackItem)}
												alt={stackItem}
												width={60}
												height={60}
												className='rounded-full bg-base-800 object-contain p-2'
											/>
										</Tooltip>
									))}
								</div>
							</div>
						</div>
						<p className='p-4 text-2xl'>{description}</p>
            <ul className='flex list-disc flex-col gap-1 p-4 marker:text-accent-100'>
              <h4 className='text-2xl'>Objectifs</h4>
              {objectives.map((objective) => (
                <li
                  key={objective}
                  className='ml-4 text-lg'
                >
                  {objective}
                </li>
              ))}
            </ul>
					</ModalContent>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default ProjectCard;
