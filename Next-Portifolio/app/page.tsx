'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

import { Hero, ProgressBar } from './shared/components'
import ReactLogo from '@/shared/assets/pic/ReactLogo.png'
import NodeLogo from '@/shared/assets/pic/NodeLogo.png'
import TSLogo from '@/shared/assets/pic/TSLogo.png'
import MySQLLogo from '@/shared/assets/pic/MySQLogo.png'

interface ButtonReactProp {
	showReact: boolean
	setShowReact: Dispatch<SetStateAction<boolean>>
}

export const ButtonReact = ({ showReact, setShowReact }: ButtonReactProp) => {
	return (
		<AnimatePresence>
			{showReact && (
				<motion.div
					initial={{ opacity: 0, x: 0, y: 0, width: '0px', height: '0px' }}
					animate={{
						opacity: 1,
						x: 90,
						y: -200,
						width: '300px',
						height: '200px',
					}}
					exit={{ opacity: 0, x: 0, y: 0, width: '0px', height: '0px' }}
					transition={{ duration: 0.2 }}
					className="absolute bg-slate-100 rounded-3xl shadow-[2px_10px_50px_#0ea5e970]"
				>
					<div className="flex flex-col  item-center shadow-inner rounded-3xl border w-full h-full border-sky-200/50 text-sky-400">
						<div className="flex justify-between mt-4">
							<p className="ml-12 text-3xl font-bold text-center ">ReactJS</p>
							<button
								type="button"
								className="mr-4 flex- rounded-md px-2 font-semibold duration-300 hover:bg-sky-400 hover:text-white "
							>
								X
							</button>
						</div>
						<p className="text-sm border-b mt-2 mx-4"> Conhecimentos:</p>
						<div className="flex justify-between my-2 mx-4 gap-2">
							<p className="text-sky-400 text-xs w-30 whitespace-nowrap">React Hook's </p>
							<ProgressBar bgcolor='bg-sky-500' completed={80} />
						</div>
						<div className="flex justify-between mx-4 gap-2">
							<p className="text-sky-400 text-xs">Componentes </p>
							<ProgressBar bgcolor='bg-sky-500' completed={80} />
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default function Home() {
	const [showReact, setShowReact] = useState<boolean>(false)

	return (
		<>
			<Hero />
			<div className="w-full flex flex-col justify-center items-center mt-20 select-none">
				<p className="font-bold text-slate-500">Melhores Hablidade</p>
				<div className="flex gap-2 mt-4 ">
					<motion.div
						onClick={() => setShowReact(!showReact)}
						className="
						flex flex-col-reverse justify-center
						items-center w-20 h-20 border rounded-xl
						cursor-pointer text-sky-400
						duration-300 hover:shadow-[2px_10px_50px_#0ea5e970]"
					>
						<ButtonReact showReact={showReact} setShowReact={setShowReact} />

						<p className="text-sm font-semibold -translate-y-3 drop-shadow-2xl">
							ReactJS
						</p>
						<motion.div
							initial={{ y: 10, scale: 1 }}
							transition={{ duration: 0.2 }}
							whileHover={
								!showReact
									? { scale: 1.5, rotate: -180, y: -30, x: -12 }
									: undefined
							}
							animate={showReact ? { scale: 2.5, x: -50, y: -280 } : undefined}
							exit={{ y: 10, scale: 1 }}
							className="flex flex-col items-center justify-center w-full h-full "
						>
							<Image
								src={ReactLogo}
								alt="React Logo"
								className="m-4 p-4 select-none"
							/>
						</motion.div>
					</motion.div>
					<div className="flex justify-center items-center w-20 h-20 p-4  border rounded-xl ">
						<Image src={NodeLogo} alt="React Logo" />
					</div>
					<div className="flex justify-center items-center w-20 h-20 p-4  border rounded-xl ">
						<Image src={TSLogo} alt="React Logo" />
					</div>
					<div className="flex justify-center items-center w-20 h-20 p-4  border rounded-xl ">
						<Image src={MySQLLogo} alt="React Logo" />
					</div>
				</div>
			</div>
		</>
	)
}
