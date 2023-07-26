'use client'
import Particles from 'react-particles'
import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import data from './particles.json'
import { Typewriter } from 'react-simple-typewriter'

export const Particle = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine)
	}, [])
	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {},
		[],
	)

	return (
		<div className="flex mt-5 flex-col justify-center items-center">
			<Particles
				width="100vw"
				height="70px"
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				className="absolute "
				options={data}
			/>
			<h1 className="z-10 font-bold text-white cursor-pointer drop-shadow-[0_0_5px_rgba(255,255,255,0,5)] text-2xl ">
				<Typewriter
					words={[
						' Olá me chamo Maykon 👋',
						' Bem vindo!',
						'Obrigado por sua atenção 😁',
					]}
					loop
					cursor
					cursorStyle="|"
					typeSpeed={50}
					deleteSpeed={10}
					delaySpeed={3000}
				/>
			</h1>
		</div>
	)
}
