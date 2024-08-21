'use client';
import { useState } from 'react';
import Image from 'next/image';
import CollapseArrow from '../icon/CollapseArrow';
import Tooltip from './Tooltip';

type CollapseProps = {
	title: string;
	stackItems: {
		icon: string;
		name: string;
	}[];
};

const Collapse: React.FC<CollapseProps> = ({ title, stackItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='w-full overflow-hidden'>
			<div className='relative' onClick={() => setIsOpen(!isOpen)}>
				<h3
					className={` cursor-pointer list-none rounded-md bg-base-800 px-6 py-4 text-5xl font-bold text-accent-100 `}>
					{title}
				</h3>

				<CollapseArrow color='stroke-accent-100' rotate={isOpen} />
			</div>
			<div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 overflow-scroll ' : 'max-h-0 overflow-scroll bg-none'}`}>
				<ul className='flex flex-wrap gap-5 p-5'>
					{stackItems?.map((item, index) => (
						<li
							className='flex flex-col items-center text-center'
							key={index}>
							<Tooltip tooltip={item.name}>
							<Image src={item.icon} alt={item.name} width={100} height={100} className='mb-2 rounded-full bg-base-800 object-contain p-2' />
							</Tooltip>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Collapse;
