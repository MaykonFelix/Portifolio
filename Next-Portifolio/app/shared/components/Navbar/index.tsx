'use client'

import Link from 'next/link'
import Links from './LinksData.json'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Navbar = () => {
	const [show, setShow] = useState<boolean>(true)

	const variant = {
		open: { x: 0 },
		closed: {},
	}

	return (
		<>
			<nav className="hidden sm:block">
				<ul className="flex gap-1">
					{Links.map(items => {
						return (
							<li key={items.id} tabIndex={items.id}>
								<Link
									href={items.path}
									className="px-4 text-lg font-medium  tracking-tighter duration-300  text-rose-600 hover:text-zinc-600 "
								>
									{items.name}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<motion.div
				animate={show ? 'open' : 'closed'}
				variants={variant}
				className="absolute z-[999999999px] w-screen h-screen backdrop-blur-xl  bg-violet-900/50 top-0 right-0 sm:hidden "
			>
				<div className="relative bg-violet-500 h-10 w-10 z-10 "></div>
			</motion.div>
		</>
	)
}
