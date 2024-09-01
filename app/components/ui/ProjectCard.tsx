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
import Collapse from './Collapse';
import { ModalFooter } from './animated-modal';
import ScrollIndicator from './ScrollIndicator';

type ProjectCardProps = {
	title: string;
	size: string;
	color: string;
	image: string;
	url: string;
	github: string;
	documents: string;
	description: string;
	stack: string[];
	objectives: string[];
	role: string;
	challenges: { description: string; resolution: string };
	keyFeatures: string[];
	inProgress: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	size,
	color,
	image,
	url,
	github,
	documents,
	description,
	stack,
	objectives,
	role,
	challenges,
	keyFeatures,
	inProgress,
}) => {
	const sizeClasses: { [key: string]: string } = {
		small: 'lg:col-span-1 lg:row-span-1 text-5xl',
		large: 'lg:col-span-2 lg:row-span-1 text-7xl',
	};

	const colorClasses: { [key: string]: string } = {
		primary: 'bg-accent-100',
		secondary: 'bg-neutral',
		tertiary: 'border-4 border-accent-100 bg-base-700 text-accent-100',
	};

	const projectPicture = getPictureURL(image);

	return (
		<div
			className={`flex cursor-pointer items-center justify-center rounded-lg p-8 ${sizeClasses[size]} ${colorClasses[color]}`}>
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
							<div className='absolute bottom-2 left-1/2 z-50 -translate-x-1/2'>
								<ScrollIndicator scrollContainerSelector='.w-full.overflow-scroll.text-neutral' />
							</div>
							<div className='absolute right-4 top-4 flex gap-4 text-2xl text-accent-100'>
								{inProgress && (
									<span className='rounded-full bg-base-700 px-4'>
										En cours
									</span>
								)}
								<span className='rounded-full bg-base-700 px-4'>
									{role}
								</span>
							</div>
						</div>
						<div className='flex flex-col gap-2 p-4 text-neutral'>
							<div className='flex flex-wrap items-center justify-between gap-2'>
								<h3 className='text-6xl text-accent-100'>
									{title}
								</h3>

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
						<Collapse title='Objectifs'>
							<ul className='flex list-disc flex-col gap-1 p-4 marker:text-accent-100'>
								{objectives.map((objective) => (
									<li
										key={objective}
										className='ml-4 text-lg'>
										{objective}
									</li>
								))}
							</ul>
						</Collapse>
						<Collapse
							title='Points clés'
							className='border-t-2 border-base-850'>
							<ul className='flex list-disc flex-col gap-1 p-4 marker:text-accent-100'>
								{keyFeatures.map((keyFeature) => (
									<li
										key={keyFeature}
										className='ml-4 text-lg'>
										{keyFeature}
									</li>
								))}
							</ul>
						</Collapse>
						<Collapse
							title='Challenges'
							className='border-t-2 border-base-850'>
							<div className='ml-4 text-lg'>
								<h5 className='text-xl text-accent-100'>
									Problème
								</h5>
								<p className='px-4'>{challenges.description}</p>
							</div>
							<div className='ml-4 text-lg'>
								<h5 className='text-xl text-accent-100'>
									Solution
								</h5>
								<p className='px-4'>{challenges.resolution}</p>
							</div>
						</Collapse>
					</ModalContent>
					<ModalFooter className='flex w-full items-center justify-between bg-base-800 text-center text-2xl text-base-800'>
						{url && (
							<Link
								className='size-full bg-accent-100 p-3'
								href={url}
								target='_blank'>
								Visiter le site
							</Link>
						)}
						{github && (
							<Link
								className='size-full bg-accent-100 p-3'
								href={github}
								target='_blank'>
								Voir le code
							</Link>
						)}
						{documents && (
							<Link
								className='size-full bg-accent-100 p-3'
								href={documents}
								target='_blank'>
								Consulter les documents
							</Link>
						)}
					</ModalFooter>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default ProjectCard;
