import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { teamData } from "../constants/content.json";
import Spinner from "../ui/Spinner";
import Typing from "../ui/Typing.jsx";
import Section from "../ui/Section.jsx";

const TeamMember = ({
  name,
  designation,
  photo,
  linkedin,
  github,
  instagram,
}) => {
  return (
    <div className="relative w-64 p-4 bg-transparent rounded-lg shadow-md transform transition-all duration-200 hover:scale-105 hover:bg-gradient-to-t from-white/20 to-transparent mx-auto">
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={photo}
          alt={name}
          className="w-48 h-48 rounded-lg mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-zinc-100">{name}</h3>
        <p className="text-zinc-400 mb-2">{designation}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-300"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ title, members }) => {
  if (!members || !Array.isArray(members)) {
    return <p>No data available for {title}.</p>;
  }

  return (
    <div className="mb-12">
      <h2 className="h2-style">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const OurTeamPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] relative"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="team"
    >
      <div className="container mx-auto px-4 py-8 bg-black">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Spinner />
          </div>
        ) : (
          <>
            <Typing
              text="Meet the Team"
              duration={150}
              className="hover:text-pop-up"
            />
            <p className="text-white text-center font-grotesk uppercase tracking-wider mb-10 hover:text-pop-up">
              2024-25
            </p>
            <TeamSection
              title="Executive Team"
              members={teamData.executiveTeam}
            />
            <TeamSection
              title="Publicity and Documentation Team"
              members={teamData.promotionsTeam}
            />
            <TeamSection
              title="Faculty Advisors"
              members={teamData.facultyTeam}
            />
          </>
        )}
      </div>
    </Section>
  );
};

export default OurTeamPage;
