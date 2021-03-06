import "./aboutme.scss";
import {SiCplusplus, SiC, SiPython, SiJava, SiXilinx, SiReact, SiSass, SiBlender, SiLinux, SiGithub, SiUnrealengine, SiUnity } from "react-icons/si";

export default function AboutMe() {

    const skills = [
        {
            img: <SiCplusplus size={90} className="icon"/>,
            name: "C++",
            desc: "I have become comftorble with c++, using it in Unreal Engine 4, arduino projects, and my first two college CS classes",
        },
        {
            img: <SiC size={90} className="icon"/>,
            name: "C",
            desc: "I used C in the course CMPSC311, where we created a client-side IO program to write/read from a disk and files, with cache and networking support. C was easy for me to pick-up thanks to the similarities between C and C++.",
        },
        {
            img: <SiPython size={90} className="icon"/>,
            name: "Python",
            desc: "I have used python for several smaller projects, such as a website scraper, programming using blender's python API, a divider and multiplier for CMPEN331, and high school assignments.",
        },
        {
            img: <SiJava size={90} className="icon"/>,
            name: "Java",
            desc: "I used Java in CMPSC221, which was a class focused on creating Java GUI related projects.",
        },
        {
            img: <SiXilinx size={90} className="icon"/>,
            name: "Vivado- Verilog",
            desc: "Verilog was used in CMPEN331, where we created a Verilog implementation of a pipelined processor with branch prediction and caching.",
        },
        {
            img: <span className="icon word" >MIPS</span>,
            name: "MIPS assembly",
            desc: "MIPS was the assembly language used in CMPEN331 to explain how processors work, and a couple MIPS assignments were completed.",
        },
        {
            img: <SiReact size={90} className="icon"/>,
            name: "React jsx",
            desc: "I used React jsx to create this website.",
        },
        {
            img: <SiSass size={90} className="icon"/>,
            name: "Sass scss",
            desc: "I used scss to create this website.",
        },

        
    ];

    const Software = [
        {
            img: <SiBlender size={90} className="icon"/>,
            name: "Blender",
            desc: "A 3D modeling/sculpting/texturing/animating/etc. program I use to create video game assets. I have also done some light programming using blender's python API.",
        },
        {
            img: <SiUnrealengine size={90} className="icon"/>,
            name: "Unreal Engine",
            desc: "A video game engine I have programmed some small video games in. I have also spent a lot of time witht he art side of the engine too, such as hair/grooms and attempting to create environments.",
        },
        {
            img: <SiUnity size={90} className="icon"/>,
            name: "Unity",
            desc: "Unity is a game engine that the PSU Video Game Development Club uses. I am one of three programmers, creating a small 2-D action-adventure game.",
        },
        
        {
            img: <SiLinux size={90} className="icon"/>,
            name: "Linux",
            desc: "I currently use Linux and Windows and equal amount. I used linux for a couple CS classes, and am creating this website using linux. I am familiar with te gcc compiler and gdb debuger, thanks to CMPSC311.",
        },
        
        {
            img: <SiGithub size={90} className="icon"/>,
            name: "GitHub",
            desc: "Username: ThousandAllen",

        },
        

    ];

    return (
        <div className="aboutme" id="aboutme">
            <div className="background">

            </div>
            <div className="wrapper">
                <div className="overview">
                    <div className="text">
                        <h1 className="title">About Me:</h1>
                        <p>
                            Hello, I am a Junior in Computer Engineering at Penn State University Park with a 3.94 (/4.0) GPA. 
                            I am an active student at Penn State; being in many major-related and non-major-related extracarricular activities. 
                            I love programming software, and I find hardware to be really interesting too! 
                            
                        </p>
                    </div>
                    <div className="imgContainer">
                        <img src="assets/TopBar/ProfilePicture.jpg" alt="" />
                    </div>
                </div>
                <div className="experience">
                    <div className="textwrapper">
                        <h1 className="title">Experience:</h1>
                        <p>
                            During my sophmore year, I worked as a peer tutor. 
                            I helped with Calculus 1, Computer Science 1-2, Physics 1-2, and Computer Engineering: Intro to Digital Systems.
                            <br/>
                            During the summer of 2017, I worked as a busser at a local ice cream shop. 
                            At which I mainly cleaned tables, cleaned dishes, and helped guests with any problems or questions.
                        </p>
                    </div>
                </div>
                <div className="activities">
                    <div className = "textwrapper">
                        <h1 className="title">Activities:</h1>
                        <div className="current">
                            <h3>
                                Since Fall 2021, I have been involved in:
                            </h3>
                        
                            <ul>
                                <li>PSU Humanoid Robotics Club - Creating a life-size humanoid robot and simulating using ROS and Unity</li>
                                <li>PSU Robotics Club - Creating a robot for a tsumo-style robotic competition</li>
                                <li>PSU Game Developement Club - Creating a 2D video game using the Unity Engine</li>
                                <li>PSU IEEE - Electrical Engineering Club - </li>
                                <li>Numerous Social Clubs:
                                    <ul>
                                        <li>Nittanyville</li>
                                        <li>Theme Park Engineering Group</li>
                                        <li>French Club</li>
                                        <li>Monty Python Society</li>
                                        <li>Harry Potter Club</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    
                        <div className="past">
                            <h3>
                                At Penn State Harrisburg, I was mainly invloved in:
                            </h3>
                        
                            <ul>
                                <li>Penn State Harrisburg Coding Club (2021)</li>
                                <li>Game development marathons:
                                    <ul>
                                        <li>AI and Games Jam 2021 </li> 
                                        <li>Mix and Game Jam 2020</li>
                                    </ul>
                                    
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="skills">
                    <div className="languages">
                        {skills.map((s)=>(
                            <div className="skill">
                                {s.img}
                                <div className="name">
                                    {s.name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="software">
                        {Software.map((a) => (
                            <div className="app">
                                 {a.img}
                                 <div className="name">
                                    {a.name}
                                 </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
