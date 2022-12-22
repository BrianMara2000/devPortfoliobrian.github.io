/*=================================================================
  The Project and Project Modal Elements just share the same data
=================================================================*/

const trafficLight = {
    name: "Traffic Light",
    label: "Embedded System",
    description:
      "Three alternative methods were used to create this traffic light: the 555 Timer IC, Arduino, and STM32.",
    logo: "../../images/projects/logo/trafficLight.png",
    demoImage: "../../images/projects/demo/trafficLight.png",
    demoImageAlt: "Traffic Light",
    demoLink: "https://github.com/BrianMara2000/",
    sourceCodeLink: "https://github.com/BrianMara2000/",
    tags: ["555 Timer IC", "Arduino", "STM32"],
  };
  
  const waterDispenser = {
    name: "Automatic Water Dispenser",
    label: "Microcontroller",
    description:
      "Water from the bottled cans is retrieved by automatic water dispenser pumps, which then dispense the water. For secure and simple water dispensing, the silicon tube within needs to be cleaned occasionally.",
    logo: "../../images/projects/logo/wd1.png",
    demoImage: "../../images/projects/demo/wd1.png",
    demoImageAlt: "Automatic Water Dispenser",
    demoLink: "https://github.com/BrianMara2000/",
    sourceCodeLink: "https://github.com/BrianMara2000/",
    tags: ["Arduino"],
  };
  
  const calculator = {
    name: "Calculator",
    label: "Logic Circuit",
    description:
      "A calculator is a device that performs arithmetic operations on numbers. Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.",
    logo: "../../images/projects/logo/2dc1.png",
    demoImage: "../../images/projects/demo/2dc1.png",
    demoImageAlt: "Logic Circuit",
    demoLink: "https://github.com/BrianMara2000/",
    sourceCodeLink: "https://github.com/BrianMara2000/",
    tags: ["Logic Circuit"],
  };
  
  const lfr = {
    name: "Line Follower Robot",
    label: "Line Follower Robot with PID using STM32",
    description:
      "This repository contains the implementation of an optimized PID controller for a line follower robot using STM32F103C8 microcontroller and BFD-1000 reflectance sensor array.",
    logo: "../../images/projects/logo/LFR1.png",
    demoImage: "../../images/projects/demo/LFR1.png",
    demoImageAlt: "Line Follower Robot with PID using STM32",
    demoLink: "https://github.com/BrianMara2000/",
    sourceCodeLink: "https://github.com/BrianMara2000/",
    tags: ["STM32", "C"],
  };
  

  
  export const projects = [
    trafficLight,
    waterDispenser,
    calculator,
    lfr,
  ];
  