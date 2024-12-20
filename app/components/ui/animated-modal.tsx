'use client';
import { cn } from '../../libs/utils';
import { useOutsideClick } from '../../hook/useOutsideClick';
import { AnimatePresence, motion } from 'framer-motion';
import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

interface ModalContextType {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ open, setOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
};

export function Modal({ children }: { children: ReactNode }) {
	return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	const { setOpen } = useModal();
	return (
		<button
			className={cn(
				className
			)}
			onClick={() => setOpen(true)}>
			{children}
		</button>
	);
};

export const ModalBody = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	const { open } = useModal();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [open]);

	const modalRef = useRef(null);
	const { setOpen } = useModal();
	useOutsideClick(modalRef, () => setOpen(false));

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						backdropFilter: 'blur(10px)',
					}}
					exit={{
						opacity: 0,
						backdropFilter: 'blur(0px)',
					}}
					className='fixed inset-0 z-50 flex size-full items-center justify-center [perspective:800px] [transform-style:preserve-3d]'>
					<Overlay />

					<motion.div
						ref={modalRef}
						className={cn(
							'min-h-[50%] max-h-[90%] md:max-w-[60%] bg-base-700 border border-transparent md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden',
							className
						)}
						initial={{
							opacity: 0,
							scale: 0.5,
							rotateX: 40,
							y: 40,
						}}
						animate={{
							opacity: 1,
							scale: 1,
							rotateX: 0,
							y: 0,
						}}
						exit={{
							opacity: 0,
							scale: 0.8,
							rotateX: 10,
						}}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 15,
						}}>
						<CloseIcon />
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export const ModalContent = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn(className)}>
			{children}
		</div>
	);
};

export const ModalFooter = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'flex justify-end gap-1',
				className
			)}>
			{children}
		</div>
	);
};

const Overlay = ({ className }: { className?: string }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				backdropFilter: 'blur(10px)',
			}}
			exit={{
				opacity: 0,
				backdropFilter: 'blur(0px)',
			}}
			className={`fixed inset-0 z-50 size-full bg-black/50 ${className}`}></motion.div>
	);
};

const CloseIcon = () => {
	const { setOpen } = useModal();
	return (
		<button
			onClick={() => setOpen(false)}
			className='group ml-auto p-4'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='size-4 text-accent-100 transition duration-200 group-hover:rotate-3 group-hover:scale-125'>
				<path stroke='none' d='M0 0h24v24H0z' fill='none' />
				<path d='M18 6l-12 12' />
				<path d='M6 6l12 12' />
			</svg>
		</button>
	);
};
