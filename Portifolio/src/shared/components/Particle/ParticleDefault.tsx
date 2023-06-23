import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const ParticleDefault = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <Particles
      width="500px"
      height="500px"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      canvasClassName="xxxx"
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,

        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onDiv: {
              selectors: "#repulse-div",
              enable: false,
              mode: "repulse",
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 50,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 40,
              duration: 2,
              mix: false,
              opacity: 8,
              size: 6,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            push: {
              default: true,
              groups: {
                quantity: 4,
              },
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
              },
            },
            slow: {
              factor: 1,
              radius: 0,
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
            light: {
              area: {
                gradient: {
                  start: { value: "#fff" },
                  stop: { value: "#000" },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000",
                },
                length: 2000,
              },
            },
          },
        },

        // Continuar daqui
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            absorb: {
              speed: 2,
            },
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              // enable: false,
              maxSpeed: 50,
              mode: "bounce",
            },
          },
          color: {
            value: "#ff008883",
          },
          links: {
            color: "#7300c0",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 0.1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 0.2, max: 5 },
          },
        },

        detectRetina: true,
      }}
    />
  );
};
