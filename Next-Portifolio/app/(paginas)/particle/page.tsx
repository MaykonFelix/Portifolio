'use client'

import Particles from 'react-tsparticles'
import { useCallback, useEffect, useState } from 'react'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine } from 'tsparticles-engine'
import amongUs from './Options/amongUs.json'

export default function particle() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container)
		},
		[],
	)

const [option, setOption] =useState()
useEffect(()=>{
let ignore = false

const AmongUs = JSON.parse(amongUs);
if(!ignore){
	setOption(AmongUs)
}
return 

},[])



	return (
		<div className="bg-slate-500">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={amongUs}
			/>
		</div>
	)
}
