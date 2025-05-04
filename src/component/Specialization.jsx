import React from "react";
import { SiReact, SiWordpress } from "react-icons/si";
import { FaCode, FaAws } from "react-icons/fa";
import "../App.css"

const specializationData = [
    {
        icon: <SiReact size={28} />,
        title: "React JS",
        description:
            "Building modern, fast, and scalable front-end applications using React, with reusable components and hooks.",
        projects: "10 Projects",
    },
    {
        icon: <FaCode size={28} />,
        title: "Full Stack",
        description:
            "Creating complete applications from front-end to back-end using the MERN stack and RESTful APIs.",
        projects: "1 Projects",
    },
    {
        icon: <SiWordpress size={28} />,
        title: "WordPress",
        description:
            "Custom themes, plugins, and full website development using WordPress. Performance optimization and security handling.",
        projects: "25 Projects",
    },
    {
        icon: <FaAws size={28} />,
        title: "AWS",
        description: "Deploying scalable, secure cloud solutions using services like EC2, S3.",
        projects: "1 Projects",
    }
];

const Specialization = () => {
    return (
        <div id="specialization" className="bg-[#0C0711] pb-16 pt-8 px-6 sm:px-10 text-white ">
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="font-sora text-[32px] leading-[42px] md:text-[46px] font-medium gradient-text">
                    My Specialization
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {specializationData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-[10px] hov-border flex flex-col gap-4"
                    >
                        <div className="px-6 py-4 bg-[#2A1454] rounded-t-[10px]">
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center text-white shadow-md"
                                style={{
                                    background: 'linear-gradient(315deg, #2A1454 11.52%, #8750F7 91.55%)',
                                }}
                            >
                                {item.icon}
                            </div>
                        </div>

                        <div className="p-6">
                        <h3 className="font-sora text-white text-[24px] leading-[29px]">{item.title}</h3>
                        <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-6 text-white">{item.description}</p>
                        <p
                            className="font-sora font-normal text-[16px] leading-[24px] uppercase underline decoration-solid underline-offset-0 decoration-[0px] skip-ink-auto"
                        >
                            {item.projects.toUpperCase()}
                        </p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specialization;
