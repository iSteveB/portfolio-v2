import type { Metadata } from 'next';
import { Athiti } from 'next/font/google';
import './globals.css';

import Header from './components/layout/Header';

const athiti = Athiti({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
	title: 'Steve Basse.',
	description:
		'Portfolio de Steve Basse | Développeur web React & Node.js créatif et passionné. Découvrez mes projets innovants, mes compétences en développement front-end et back-end, et mon expertise en création de sites web performants et élégants.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body className={athiti.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
