import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#000",
          },
          opacity: 1,
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            color: {
              value: "#fff",
            },
            opacity: 1,
          },
          enable: false,
        },
        clear: true,
        defaultThemes: {},
        delay: 0,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: [],
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "trail",
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
            trail: {
              delay: 0.005,
              pauseOnStop: true,
              quantity: 5,
              particles: {
                color: {
                  value: "#ff0000",
                  animation: {
                    enable: true,
                    speed: 400,
                    sync: true,
                  },
                },
                collisions: {
                  enable: false,
                },
                links: {
                  enable: false,
                },
                move: {
                  outModes: {
                    default: "destroy",
                  },
                  speed: 2,
                },
                size: {
                  value: {
                    min: 1,
                    max: 5,
                  },
                  animation: {
                    enable: true,
                    speed: 5,
                    sync: true,
                    startValue: "min",
                    destroy: "max",
                  },
                },
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              h: {
                count: 0,
                enable: true,
                speed: 50,
                sync: false,
              },
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "out",
            },
            random: false,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: {
              min: 0.3,
              max: 0.8,
            },
            animation: {
              enable: true,
              speed: 0.5,
              startValue: "random",
              mode: "auto",
              sync: false,
            },
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              enable: true,
              speed: 3,
              startValue: "random",
              mode: "auto",
              sync: false,
            },
          },
          links: {
            color: {
              value: "random",
            },
            distance: 100,
            enable: true,
            opacity: 1,
            width: 1,
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
};

export default ParticleBackground;