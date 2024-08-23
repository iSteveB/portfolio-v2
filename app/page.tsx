import { Petrona } from 'next/font/google';
import Image from 'next/image';
import HeroPicture from './assets/images/hero-picture.webp';

import Section from './components/ui/Section';
import Card from './components/ui/Card';
import Tag from './components/ui/Tag';
import Particles from './components/ui/Particles';
import Link from 'next/link';
import TechStack from './components/section/TechStack';

const petrona = Petrona({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<main>
			<Section color='light' css='overflow-hidden'>
				<div className='flex items-center justify-center gap-52'>
					<div className={petrona.className + 'flex flex-col gap-10'}>
						<div>
							<span className='mb-2 inline-block rounded-md bg-accent-100 px-2 text-3xl'>
								Hello !
							</span>
						</div>
						<h1 className='text-5xl text-neutral'>
							<span>Je suis Steve,</span>
							<br />
							<span>
								Développeur web <br /> Next.js & NestJS
							</span>
							<br />
							<div className='mt-4 flex gap-2'>
								<Tag text='Front-End' />
								<Tag text='Full-Stack' />
							</div>
						</h1>
					</div>
					<div className='relative flex w-1/3'>
						<div>
							<Particles />
						</div>
						<Image
							src={HeroPicture}
							alt='Steve Basse'
							className='z-20'
						/>
						<div className='absolute -left-32 top-20 z-10 size-[600px] rounded-full bg-base-800 shadow-xl'></div>
					</div>
				</div>
			</Section>
			<Section color='dark'>
				<div className='flex items-center justify-center gap-8 py-20'>
					<div className='flex w-1/2 flex-col gap-6'>
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
					<div className='w-1/2 text-lg text-neutral'>
						<h2 className='pb-4 text-5xl text-neutral'>À propos</h2>
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
								J&apos;ai troqué ma carrière de cuistot contre
								celle de dev, passant de la création de plats à
								la création d&apos;apps web ! Un sacré
								changement, mais la{' '}
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
									Ce que j&apos;aime dans le développement web
									?{' '}
								</span>
								On a jamais fini d’apprendre et chaque jour est
								différent, avec son lot de mauvaises surprises
								mais aussi de bonnes (oui, oui! ). Déboggage,
								conception de nouvelles fonctionnalités, test...
								Pas le temps de s&apos;ennuyer ! J’adore
								transformer des idées en code et pour ça
								j’utilise{' '}
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
								Continuer à progresser, jour après jour. Comme
								le bon vin, je compte bien m&apos;améliorer avec
								le temps (sans les maux de tête).Si vous
								cherchez un développeur passionné, créatif et
								toujours partant pour relever de nouveaux défis,
								contactez-moi en cliquant juste{' '}
								<Link
									href='/contact'
									className='text-accent-100 underline'>
									ici
								</Link>{' '}
								!
							</p>
						</div>
					</div>
				</div>
			</Section>

			<Section color='light'>
				<TechStack />
			</Section>
		</main>
	);
}
