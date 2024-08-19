import { Petrona } from 'next/font/google';
import Image from 'next/image';
import HeroPicture from './assets/images/hero-picture.webp';

import Section from './components/ui/Section';
import Card from './components/ui/Card';
import Particles from './components/ui/Particles';
const petrona = Petrona({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<main>
			<Section color='light' css="overflow-hidden">
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
						</h1>
					</div>
					<div className='relative flex w-1/3'>
					<div className=''><Particles /></div>
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
				<div className='flex items-start justify-center gap-8 pt-20'>
					<div className='flex w-1/2 flex-col gap-5'>
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
					<div className='w-1/2'>
						<h2 className='text-4xl text-neutral'>À propos</h2>
						<q className=' rounded-md bg-accent-100 px-2 font-semibold'>
							Toujours coder comme si la personne qui maintiendra
							votre code est un psychopathe violent qui sait où
							vous habitez.
						</q><span> - John Woods</span>
						<p>
							Moi c’est Steve, développeur web depuis 4 ans. J&aspos;ai
							troqué ma carrière de cuistot contre celle de dev,
							passant de la création de plats à la création d&aspos;apps
							web! Un sacré changement, mais la créativité et la
							rigueur sont toujours au menu ! Ce que j&aspos;aime dans
							le développement web ? On a jamais fini d’apprendre
							et chaque jour est différent, avec son lot de
							mauvaises surprises mais aussi de bonnes (oui, oui!
							). Déboggage, conception de nouvelles
							fonctionnalités, test... Pas le temps de s&aspos;ennuyer !
							J’adore transformer des idées en code et pour ça
							j’utilise React/Next.js et Node.js/Nest.js ⚡.Mon
							objectif ? Continuer à progresser, jour après jour.
							Comme le bon vin, je compte bien m&aspos;améliorer avec le
							temps (sans les maux de tête).Si vous cherchez un
							développeur passionné, créatif et toujours partant
							pour relever de nouveaux défis, contactez-moi en
							cliquant juste ici !
						</p>
					</div>
				</div>
			</Section>
		</main>
	);
}
