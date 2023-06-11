import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Spin",
    particles: {
        number: {
            value: 80,
            density: {
                enable: false,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                enable: true,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: 10,
        },
        move: {
            enable: true,
            speed: {
                min: 1,
                max: 5,
            },
            spin: {
                acceleration: {
                    min: -1,
                    max: 1,
                },
                enable: true,
            },
            trail: {
                enable: true,
                fill: { color: "#000" },
                length: 30,
            },
        },
    },
    background: {
        color: "#000000",
    },
};
export default options;
