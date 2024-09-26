import { Petrona } from 'next/font/google';
import Image from 'next/image';
import HeroPicture from './assets/images/hero-picture.webp';

import Section from './components/ui/Section';
import Card from './components/ui/Card';
import Tag from './components/ui/Tag';
import Particles from './components/ui/Particles';
import Link from 'next/link';
import TechStack from './components/section/TechStack';
import BentoGrid from './components/section/BentoGrid';
import Navigation from './components/layout/Navigation';
import Tooltip from './components/ui/Tooltip';

const petrona = Petrona({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<div className='relative flex min-h-screen w-full justify-center'>
			<main className='relative flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-between'>
				<div className='absolute left-0 top-0 h-full'>
					<Navigation />
				</div>
				<Section id='hero' color='light' css='lg:overflow-hidden'>
					<div className='flex flex-col-reverse items-center justify-center p-8 lg:flex-row lg:gap-52 lg:p-0'>
						<div
							className={`${petrona.className} mb-16 flex flex-col items-center justify-center gap-6 text-center lg:mb-0 lg:items-start lg:justify-start lg:text-start`}>
							<div>
								<span className='mb-2 inline-block rounded-md bg-accent-100 px-2 text-4xl'>
									Hello !
								</span>
							</div>
							<h1 className='flex flex-col gap-2 text-4xl text-neutral lg:max-w-96 lg:text-5xl'>
								<span>Je suis Steve, </span>
								<strong>Développeur web</strong>
								<strong> React & Node.js</strong>
							</h1>
							<div className='mt-4 flex gap-2'>
								<Tag text='Front-End' />
								<Tag text='Full-Stack' />
							</div>
						</div>
						<div className='relative flex lg:w-1/3'>
							<div>
								<Particles />
							</div>
							<Image
								src={HeroPicture}
								alt='Steve Basse'
								className='z-20 my-10 max-w-96 rounded-full bg-base-850 lg:my-0 lg:rounded-none lg:bg-transparent'
								priority
							/>
							<div className='absolute -left-32 top-20 z-10 hidden size-[600px] rounded-full bg-base-800 shadow-xl lg:block'></div>
						</div>
					</div>
				</Section>
				<Section id='about' color='dark'>
					<div className='flex flex-col-reverse items-center justify-center gap-8 py-20 lg:flex-row'>
						<div className='flex w-full flex-col gap-6 p-8 lg:w-1/2'>
							<Card
								title='Performance'
								text="Optimiser les sites web, pour augmenter la vitesse de chargement des pages et l'expérience utilisateur."
							/>
							<Card
								title='Clean Code'
								text='Écrire du code facile à lire, à maintenir, et qui adhère aux bonnes pratiques.'
							/>
							<Card
								title='SEO'
								text='Améliorer la visibilité en ligne en utilisant des techniques de référencement naturel.'
							/>
						</div>
						<div className='w-full p-8 text-lg text-neutral lg:w-1/2'>
							<h2 className='pb-4 text-5xl text-neutral'>
								À propos
							</h2>
							<mark className=' rounded-sm bg-accent-100 px-2 leading-8'>
								<q className='font-semibold'>
									Toujours coder comme si la personne qui
									maintiendra votre code est un psychopathe
									violent qui sait où vous habitez.
								</q>
								<span> - John Woods</span>
							</mark>
							<div className='mt-3 flex flex-col gap-4'>
								<p>
									Moi c’est Steve,{' '}
									<strong className='text-accent-100'>
										développeur web
									</strong>{' '}
									depuis 4 ans.
								</p>
								<p>
									J&apos;ai troqué ma carrière de cuistot
									contre celle de dev, passant de la création
									de plats à la création d&apos;apps web ! Un
									sacré changement, mais la{' '}
									<strong className='text-accent-100'>
										créativité
									</strong>{' '}
									et la{' '}
									<strong className='text-accent-100'>
										rigueur
									</strong>{' '}
									sont toujours au menu !
								</p>
								<p>
									<span className='text-accent-100'>
										Ce que j&apos;aime dans le développement
										web ?{' '}
									</span>
									On a jamais fini d’apprendre et chaque jour
									est différent, avec son lot de mauvaises
									surprises mais aussi de bonnes (oui, oui! ).
									Déboggage, conception de nouvelles
									fonctionnalités, test... Pas le temps de
									s&apos;ennuyer ! J’adore transformer des
									idées en code et pour ça j’utilise{' '}
									<strong className='text-accent-100'>
										React/Next.js
									</strong>{' '}
									et{' '}
									<strong className='text-accent-100'>
										Node.js/Nest.js
									</strong>
									⚡.
								</p>
								<p>
									<span className='text-accent-100'>
										Mon objectif ?
									</span>{' '}
									Continuer à progresser, jour après jour.
									Comme le bon vin, je compte bien
									m&apos;améliorer avec le temps (sans les
									maux de tête).Si vous cherchez un
									développeur passionné, créatif et toujours
									partant pour relever de nouveaux défis,
									contactez-moi par{' '}
									<Tooltip
										tooltip='Copier mon email'
										copyText='contact@stevebasse.fr'>
										<span className='cursor-pointer text-accent-100 underline'>
											email
										</span>
									</Tooltip>{' '}
									ou sur{' '}
									<a
										href='https://www.linkedin.com/in/steve-basse'
										className='text-accent-100 underline'
										target='_blank'
										rel='noreferrer'>
										LinkedIn
									</a>{' '}
									!
								</p>
							</div>
						</div>
					</div>
				</Section>

				<Section id='portfolio' color='light' css='p-8'>
					<TechStack />
				</Section>

				<Section color='dark'>
					<BentoGrid />
				</Section>
			</main>
		</div>
	);
}
