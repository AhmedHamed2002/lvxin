'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function InteractiveBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
  <Particles
  init={particlesInit}
  className="absolute inset-0 z-0"
  options={{
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: 45,
        density: {
          enable: true,
          area: 1200,
        },
      },
      color: {
        value: '#0e2259',
      },
      opacity: {
        value: 1.2,
      },
      size: {
        value: { min: 5, max: 8 },
      },
      move: {
        enable: true,
        speed: 1.2, 
        direction: 'none',
        random: true,
        outModes: {
          default: 'out',
        },
      },
      links: {
        enable: true,
        color: '#0e2259',
        opacity: 0.8, 
        distance: 150, 
        links: {
          opacity: 0.8,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  }}
/>


  )
}

