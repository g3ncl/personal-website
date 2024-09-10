"use client";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import styles from "./styles.module.scss";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={styles.solidBackground}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className={styles.particles}
        options={{
          background: {
            color: {
              value: "#000000",
            },
            opacity: 0,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 400,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 3,
              },
            },
            opacity: {
              value: 0.3,
              random: false,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onclick: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 20,
                speed: 0.1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};
export default ParticlesBackground;
