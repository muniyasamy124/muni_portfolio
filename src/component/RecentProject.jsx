import React from "react";
import { FiExternalLink, FiEye } from "react-icons/fi";
import { SiReact, SiWordpress, SiMongodb } from "react-icons/si";
import {
    awsIcon,
    awsWhite,
    chillac,
    context,
    flamingo,
    foodorder,
    ITTT,
    matbaier,
    menufood,
    movie,
    muni,
    muniContact,
    redux,
    seo,
    travel,
    weather,
    yawabeh,
} from '../assets/images';


const RecentProjects = () => {
    const projects = {
        react: [
            {
                title: "Redux App",
                image: `${redux}`,
                tags: ["React", "Redux"],
                description: [
                    "Built a responsive customer management app using React and Redux Toolkit. Used useSelector and useDispatch for state, and styled with Tailwind CSS for a clean interface."
                ],
                liveLink: "https://redux-react-8p4s.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/redux_react",
            },
            {
                title: "Blogging App",
                image: `${context}`,
                tags: ["React", "Context API"],
                description: [
                    "Developed a blog app using React and Context API. Supports dark mode, post management, and global state via custom hooks. Used Faker for mock content."
                ],
                liveLink: "https://usecontext-react.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/usecontext_react",
            },
            {
                title: "Packing List App",
                image: `${travel}`,
                tags: ["React"],
                description: [
                    "Created a dynamic packing list app with React using useState. Supports adding, sorting, and toggling items. Includes filters and real-time progress UI."
                ],
                liveLink: "https://travellist-react.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/travellist_react",
            },
            {
                title: "Weather App",
                image: `${weather}`,
                tags: ["React", "API"],
                description: [
                    "Built a weather forecast app with React using OpenWeather API. Displays live temperature and wind. Used useRef and useEffect with validation and error handling."
                ],
                liveLink: "https://weather-react-njx8.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/weather_react",
            },
            {
                title: "Movie App",
                image: `${movie}`,
                tags: ["React", "API"],
                description: [
                    "Developed a movie search app using React and OMDb API. Users can view info, rate, and add to watchlist. Used local storage, custom hooks, and average rating logic."
                ],
                liveLink: "https://movie-react-lck4.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/movie_react",
            },
            {
                title: "Pizza Ordering App",
                image: `${menufood}`,
                tags: ["React"],
                description: [
                    "Created a pizza ordering interface with React. Features live menu rendering, status-based UI, and modular components with smooth state logic."
                ],
                liveLink: "https://pizza-react-dovw.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/pizza_react",
            },
        ],
        wordpress: [
            {
                title: "Chillac Site",
                image: `${chillac}`,
                tags: ["WordPress", "Elementor"],
                description: [],
                liveLink: "https://chillac.in/",
                codeLink: "",
            },
            {
                title: "ITTT Site",
                image: `${ITTT}`,
                tags: ["WordPress", "Elementor", "PMPRO Plugin"],
                description: [],
                liveLink: "https://theittt.org/",
                codeLink: "",
            },
            {
                title: "Matt Baier Site",
                image: `${matbaier}`,
                tags: ["WordPress", "Avada Theme"],
                description: [],
                liveLink: "https://mattbaier.com/",
                codeLink: "",
            },
            {
                title: "SEO Company Chennai",
                image: `${seo}`,
                tags: ["WordPress", "Tailwind Css"],
                description: [],
                liveLink: "https://the7eagles.com/seocompanyinchennai/",
                codeLink: "",
            },
            {
                title: "Flamingo Healthcare",
                image: `${flamingo}`,
                tags: ["WordPress", "Elementor"],
                description: [],
                liveLink: "https://flamingohealthcare.in/",
                codeLink: "",
            },
            {
                title: "Yawabeh",
                image: `${yawabeh}`,
                tags: ["WordPress", "Elementor"],
                description: [],
                liveLink: "https://yawabeh.com/",
                codeLink: "",
            },
        ],
        mern: [
            {
                title: "Food Delivery App",
                image: `${foodorder}`,
                tags: ["MongoDB", "Express", "React", "Node.js"],
                description: [
                    "Built a fully functional food ordering application using MongoDB, Express.js, React, and Node.js.Implemented JWT-based user authentication and role-based access.Integrated Stripe for secure payment processing.Developed an admin dashboard to manage food items, orders, and user data.Focused on performance optimization, REST API design, and responsive UI/UX.",
                ],
                liveLink: "https://food-delivery-zn07.onrender.com/",
                codeLink: "https://github.com/muniyasamy124/food_delivery",
            }
        ],
    };

    const Section = ({ title, icon, items }) => (
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
                {icon}
                <h3 className="font-sora not-italic font-semibold md:text-[36px] text-[24px] leading-[46px] text-white">
                    {title}
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((proj, idx) => (
                    <div
                        key={idx}
                        className="relative group bg-[#1a1a2e]  shadow-inset-white-glow p-8 rounded-[50px] border-2 border-[#8750F7]
 overflow-hidden"
                    >
                        <div className="relative">
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="rounded-xl w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-all duration-300">
                                <a
                                    href={proj.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
                                >
                                    <FiExternalLink size={24} />
                                </a>
                                {proj.codeLink && proj.codeLink !== "" && title !== "WordPress" && (
                                    <a
                                        href={proj.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
                                    >
                                        <FiEye size={24} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <h4 className="font-sora font-semibold text-[22px] leading-[28.02px] text-[#FFFFFF] mt-4">
                            {proj.title}
                        </h4>
                        <div className="font-sora font-normal text-[12px] leading-[18px] text-[#DDDDDD] mt-1 space-y-1">
                            {proj.description?.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {proj.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="font-sora font-normal text-[16px] leading-[24px] text-[#ffffff] bg-[#8750F7] px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="project" className="px-6 md:pb-12 pb-4 bg-[#0e0e16]">
            <div className="max-w-7xl m-auto ">
                <h2 className="font-sora text-[32px] leading-[42px] md:text-[46px] font-medium gradient-text mb-10 text-center">
                    Recent Projects
                </h2>

                <Section
                    title="React"
                    icon={<SiReact className="text-cyan-400" size={30} />}
                    items={projects.react}
                />
                <Section
                    title="WordPress"
                    icon={<SiWordpress className="text-blue-400" size={30} />}
                    items={projects.wordpress}
                />
                <Section
                    title="MERN Stack"
                    icon={<SiMongodb className="text-green-500" size={30} />}
                    items={projects.mern}
                />
            </div>
        </section>
    );
};

export default RecentProjects;
