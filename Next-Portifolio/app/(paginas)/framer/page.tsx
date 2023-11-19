'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import ControlCameraIcon from '@mui/icons-material/ControlCamera'

export default function Framer() {
	const x = useMotionValue(0)

	const background = useTransform(
		x,
		[-100, 0, 100],
		['#ff008c', '#7700ff', 'rgb(255, 255, 0)'],
	)

	return (
		<motion.div
			initial={{ width: 0, y: -80 }}
			animate={{ width: '100%' }}
			transition={{ duration: 0.3 }}
			className="bg-[#f0f0] w-full"
		>
			<div className="container">
				<motion.div
					className="w-full h-[92vh] border flex flex-col items-center justify-center shadow-[2px_5px_20px_reba(0,0,0,0.4)]"
					style={{ background }}
				>
					<h1 className="font-bold text-2xl text-sky-500">Framer Motion</h1>
					<h2 className="font-bold text-xl text-[#ccc]">Teste</h2>

					<motion.div
						drag
						dragConstraints={{
							top: -300,
							left: -300,
							right: 300,
							bottom: 300,
						}}
						style={{ x }}
						whileHover={{ scale: 1.5, borderRadius: '20px' }}
						whileTap={{
							scale: 0.5,
							borderRadius: '10px',
							cursor: 'grabbing ',
						}}
						className="w-20 h-20 bg-white flex items-center justify-center border rounded-xl cursor-grab"
					>
						<ControlCameraIcon color="primary" />
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	)
}
