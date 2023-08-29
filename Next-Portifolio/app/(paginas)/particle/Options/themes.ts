import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Themes",
    themes: [
        {
            name: "light",
            default: {
                value: true,
                auto: true,
                mode: "light",
            },
            options: {
                background: {
                    color: "#ffffff",
                },
                particles: {
                    color: {
                        value: ["#000000", "#0000ff"],
                    },
                },
            },
        },
        {
            name: "dark",
            default: {
                value: true,
                auto: true,
                mode: "dark",
            },
            options: {
                background: {
                    color: "#000000",
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#ff0000"],
                    },
                },
            },
        },
        {
            name: "red",
            options: {
                background: {
                    color: "#ff0000",
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#000000"],
                    },
                },
            },
        },
        {
            name: "green",
            options: {
                background: {
                    color: "#00ff00",
                },
                particles: {
                    color: {
                        value: ["#000000", "#0000ff"],
                    },
                },
            },
        },
        {
            name: "blue",
            options: {
                background: {
                    color: "#0000ff",
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#00ff00"],
                    },
                },
            },
        },
        {
            name: "yellow",
            options: {
                background: {
                    color: "#ffff00",
                },
                particles: {
                    color: {
                        value: ["#000000", "#ff0000"],
                    },
                },
            },
        },
        {
            name: "cyan",
            options: {
                background: {
                    color: "#00ffff",
                },
                particles: {
                    color: {
                        value: ["#000000", "#ff00ff"],
                    },
                },
            },
        },
        {
            name: "grey",
            options: {
                background: {
                    color: "#777777",
                },
                particles: {
                    color: {
                        value: ["#ffffff", "#000000"],
                    },
                },
            },
        },
    ],
    fpsLimit: 60,
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        shape: {
            type: ["circle", "square"],
        },
        opacity: {
            value: 1,
        },
        size: {
            value: 30,
            random: {
                enable: true,
                minimumValue: 15,
            },
        },
        rotate: {
            value: 0,
            direction: "random",
            animation: {
                speed: 5,
                enable: true,
            },
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            out_mode: "out",
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
    },
    detectRetina: true,
};

export default options;
