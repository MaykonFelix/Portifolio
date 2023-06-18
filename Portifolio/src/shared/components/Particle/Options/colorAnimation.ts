import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Color Animation",
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ff0000",
            animation: {
                count: 1,
                enable: true,
                speed: 60,
                sync: true,
            },
        },
        stroke: {
            width: 30,
            color: {
                value: "#0000ff",
                animation: {
                    count: 1,
                    enable: true,
                    speed: 60,
                    sync: true,
                },
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 15,
        },
        move: {
            enable: true,
            speed: 6,
        },
    },
    background: {
        color: "#000000",
    },
};

export default options;
