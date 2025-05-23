import Profile from "../components/Profile";
import Education from "../components/Education";
import Internships from "../components/Internships";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Extras from "../components/Extras";

import info from "../data/info.json";

export default function Home() {
  return (
    <>
      <Profile profile={info.profile} />
      <Education education={info.education} />
      <Internships internships={info.internships} />
      <Projects projects={info.projects} />
      <Skills skills={info.skills} />
      <Certifications certifications={info.certifications} />
      <Extras goals={info.goals} hobbies={info.hobbies} />
    </>
  );
}
