import { type ISourceOptions, MoveDirection } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Images with Custom Directions",
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "bubble",
            },
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
        },
    },
    particles: {
        move: {
            direction: "none",
            enable: true,
            speed: 2,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 1,
        },
        rotate: {
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            },
            direction: "random",
            value: {
                min: 0,
                max: 360,
            },
        },
        shape: {
            type: "image",
            options: {
                image: [
                    {
                        src: "https://particles.js.org/images/fruits/apple.png",
                        width: 32,
                        height: 32,
                        particles: {
                            move: {
                                direction: MoveDirection.top,
                            },
                        },
                    },
                    {
                        src: "https://particles.js.org/images/fruits/avocado.png",
                        width: 32,
                        height: 32,
                        particles: {
                            move: {
                                direction: MoveDirection.bottom,
                            },
                        },
                    },
                ],
            },
        },
        size: {
            value: 16,
        },
    },
    polygon: {
        draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5,
        },
        move: {
            radius: 10,
        },
        scale: 1,
        type: "none",
        url: "",
    },
    background: {
        color: "#fff",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
    },
};

export default options;
