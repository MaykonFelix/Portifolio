'use client'
import Particles from 'react-particles'
import { useCallback } from 'react'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import data from './particles.json'

export const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  )

  return (
    <Particles
      width="100vw"
      height="70px"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={data}
    />
  )
}
