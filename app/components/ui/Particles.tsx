'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const App = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = useCallback(
		async (container?: Container): Promise<void> => {
			 console.log(container);
		},
		[]
	);

	const options: ISourceOptions = useMemo(
		() => ({
			fpsLimit: 120,
			fullScreen: { enable: false },
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 1,
					},
					repulse: {
						distance: 100,
						duration: 1,
					},
				},
			},
			particles: {
				move: {
					direction: MoveDirection.top,
					enable: true,
					outModes: {
						default: OutMode.bounce,
						top: OutMode.out,
						left: OutMode.bounce,
						right: OutMode.bounce,
						bottom: OutMode.out,
					},
					random: true,
					speed: { min: 2, max: 3 },
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 35,
				},
				opacity: {
					value: 1,
				},
				shape: {
					type: 'image',
					options: {
						image: [
							{
								height: 400,
								width: 400,
								src: 'icons/express.svg',
							},
							{
								height: 400,
								weight: 400,
								src: "icons/nestjs.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/github.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/javascript.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/mongodb.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/nextjs.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/nodejs.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/postgresql.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/prisma.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/react.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/redux.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/sanity.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/sass.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/tailwind.svg",	
							},
							{
								height: 400,
								weight: 400,
								src: "icons/typescript.svg",	
							},
						],
					},
				},
				size: {
					value: { min: 20, max: 50 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	if (!init) return null;

	return (
		<Particles
			id='tsparticles'
			particlesLoaded={particlesLoaded}
			options={options}
			className='absolute -left-32 top-0 z-30 size-[700px] rounded-full'
		/>
	);
};

export default App;
