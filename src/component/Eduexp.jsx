import React from "react";

const TimelineItem = ({ title, role, date, percentage, description, isFirst, isLast }) => (
  <div className="relative pl-8 mb-6 last:mb-0">
    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#8750F7] rounded-full border-2 border-[#0B061F] z-10" />

    {/* Line above */}
    {!isFirst && (
      <div className="absolute left-[6px] top-[-2.5rem] h-[2.5rem] w-px bg-[#8750F7] z-0" />
    )}

    {/* Line below */}
    {!isLast && (
      <div className="absolute left-[6px] top-[1.5rem] h-[calc(100%+0.5rem)] w-px bg-[#8750F7] z-0" />
    )}

    {/* Content */}
    <h4 className="font-sora text-white md:text-[20px] text-[18px] leading-[24px] md:leading-[36px]">{title}</h4>
    <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-0 text-[#DDDDDD]">{role}</p>
    {percentage && (
      <p className="font-sora font-light text-[16px] leading-[24px] pt-4 pb-4 text-[#DDDDDD]">{percentage}</p>
    )}
    {description && (
      <p className="font-sora font-light text-[16px] leading-[24px] pt-2 pb-2 text-[#AAAAAA]">
        {description}
      </p>
    )}
    <p className="font-sora font-light text-[16px] leading-[24px] text-[#747779]">{date}</p>
  </div>
);

const TimelineColumn = ({ heading, data }) => (
  <div className="w-full md:w-1/2 md:px-4 px-0 pb-6 md:pb-0">
    <h3 className="font-sora md:pb-16 pb-2 text-[20px] leading-[24px] text-[#8750F7] font-normal mb-6">{heading}</h3>
    <div className="ml-1 relative">
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isFirst={index === 0}
          isLast={index === data.length - 1}
        />
      ))}
    </div>
  </div>
);

export default function TimelineSection() {
  const education = [
    {
      title: "BACHELOR OF ENGINEERING - CSE",
      role: "PSNA College Of Engineering And Technology, Dindigul",
      percentage: "7.0 CGPA",
      date: "2017 - 2021",
    },
    {
      title: "HIGHER SECONDARY CERTIFICATE",
      role: "St. Lasalle Higher Secondary School, Tuticorin",
      percentage: "76 - Percentage",
      date: "2015 - 2017",
    },
  ];

  const experience = [
    {
      title: "WEB DEVELOPER",
      role: "ZerSoft Technology (10/2022 - 03/2024) - Tuticorin.",
      description:
        "I'm an experienced WordPress developer with over 10 websites built, specializing in themes, plugins, responsive design, security, PHP-based flyers, ACF custom posts, and solar energy plugin customization.",
    },
    {
      title: "WORDPRESS DEVELOPER",
      role: "7 Eagles (04/2024 - Present) - Chennai.",
      description:
      "I have developed more than 10 websites using WordPress and Elementor, and have worked with the Divi theme. I have created custom posts using ACF and built custom templates in WordPress using HTML and CSS. Additionally, I contributed to React projects by developing pages with Tailwind CSS and worked on wordpress plugin functionality.",
    }
  ];

  return (
    <section id="education" className="bg-[#0B061F] md:pb-12 pb-6 px-6  md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
      <h2 className="font-sora md:pb-16 pb-8 text-[32px] leading-[42px] md:text-[46px] font-medium gradient-text text-center">
        <span>Education & </span>
        <span>Work Experience</span>
      </h2>
      <div className="flex flex-col md:flex-row">
        <TimelineColumn heading="Education" data={education} />
        <TimelineColumn heading="Experience" data={experience} />
      </div>
      </div>
    </section>
  );
}
