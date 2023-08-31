'use client'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback, useEffect, useState } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import { amongUs } from './Options/amongUs'

export default function particle() {
	const [show, setShow] = useState<boolean>()

	useEffect(() => {
		let ignore = false
		if (!ignore) {
			setShow(true)
		}
		return () => {
			ignore = true
		}
	}, [])

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine)
	}, [])

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container)
		},
		[],
	)

	return (
		<div className="bg-slate-500">
			{show && (
				<Particles
					id="tsparticles"
					width="100vh"
					height="100vw"
					init={particlesInit}
					loaded={particlesLoaded}
					options={amongUs}
				/>
			)}
		</div>
	)
}
