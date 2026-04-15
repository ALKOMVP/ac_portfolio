import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const companyLine = experience.employment
    ? `${experience.company_name} · ${experience.employment}`
    : experience.company_name;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
            decoding="async"
            width={48}
            height={48}
          />
        </div>
      }
    >
      <div className="text-white text-[24px] font-bold">
        <h3>{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {companyLine}
        </p>
        {experience.location ? (
          <p className="text-secondary text-[14px] font-medium mt-1" style={{ margin: 0 }}>
            {experience.location}
          </p>
        ) : null}
      </div>

      {experience.intro_heading ? (
        <h4 className="text-white font-semibold text-[16px] mt-5 mb-2 tracking-wide">
          {experience.intro_heading}
        </h4>
      ) : null}
      {experience.intro ? (
        <p className="text-white-100 text-[14px] leading-relaxed tracking-wide">
          {experience.intro}
        </p>
      ) : null}

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`${experience.company_name}-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company_name + experience.date} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
