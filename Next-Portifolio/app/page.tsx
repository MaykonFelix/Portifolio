'use client'
import { Hero } from './shared/components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ReactLogo from '@/shared/assets/pic/ReactLogo.png'
import NodeLogo from '@/shared/assets/pic/NodeLogo.png'
import TSLogo from '@/shared/assets/pic/TSLogo.png'
import MySQLLogo from '@/shared/assets/pic/MySQLogo.png'

export default function Home() {
	return (
		<>
			<Hero />
			<div className="w-full flex flex-col justify-center items-center mt-20">
				<p className="font-bold text-slate-500">Melhores Hablidade</p>
				<div className="flex gap-2 mt-4 ">
					<motion.div
						whileHover={{ scale: 1.2 }}
						className="flex flex-col-reverse justify-center items-center w-20 h-20 border rounded-xl  cursor-pointer text-white hover:text-sky-400 hover:mr-4 hover:shadow-[2px_10px_50px_#0ea5e970]"
					>
						<p className="text-sm font-semibold -translate-y-3 drop-shadow-2xl">ReactJS</p>
						<motion.div
							initial={{ y: 10 }}
							transition={{ duration: 0.5 }}
							whileHover={{ scale: 2, rotate: -180, y: -30, x: -12 }}
							className="flex flex-col items-center justify-center w-full h-full "
						>
							<Image src={ReactLogo} alt="React Logo" className="m-4 p-4" />
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
