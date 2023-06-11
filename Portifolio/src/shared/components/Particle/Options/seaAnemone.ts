import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Sea Anemone",
    particles: {
        color: {
            value: "#FF0000",
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "destroy",
            },
            path: {
                clamp: false,
                enable: true,
                delay: {
                    value: 0,
                },
                generator: "curvesPathGenerator",
            },
            speed: 1,
            trail: {
                fill: { color: "#000" },
                length: 30,
                enable: true,
            },
        },
        number: {
            density: {
                enable: true,
            },
            value: 0,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {
                min: 1,
                max: 10,
            },
            animation: {
                count: 1,
                startValue: "min",
                enable: true,
                speed: 10,
                sync: true,
            },
        },
    },
    background: {
        color: "#000",
    },
    emitters: {
        direction: "none",
        rate: {
            quantity: 5,
            delay: 0.3,
        },
        size: {
            width: 0,
            height: 0,
        },
        spawnColor: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 10,
            },
        },
        position: {
            x: 50,
            y: 50,
        },
    },
};

export default options;
