import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Custom Shape",
    particles: {
        links: {
            enable: false,
        },
        stroke: {
            color: {
                value: "random",
            },
            width: 1,
        },
        shape: {
            type: "spiral",
            options: {
                spiral: {
                    innerRadius: 1,
                    lineSpacing: 1,
                    fill: false,
                    close: false,
                },
            },
        },
        size: {
            value: 20,
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 50,
                sync: false,
            },
        },
    },
    preset: "links",
    background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
};

export default options;
