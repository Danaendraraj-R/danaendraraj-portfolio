import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import "./intern.css";
import InternshipEntry from "./InternshipEntry";

const Internships = () => {
    const internships = [
        {
          companyName: "Zoho Corporation",
          role:"Project Trainee",
          duration: "September 2022 - February 2023 (6 months)",
          description: "Developed an dynamic web application \n Implemented Jaas Authentication \n Created an Custom Export Module",
          skillsLearned: "HTML | CSS | Java | Java Servlets | JSP | Postgres | Javascript",
        },
        {
            companyName: "Zoho Corporation",
            role:"Incubation Trainee",
            duration: "December 2023 - March 2024 (4 months)",
            description: "Developed Dynamic web application \n Built web application using Java Servlets, PSQL \n Used JS Libraries like JQuery and used AJAX",
            skillsLearned: "HTML | CSS | Java | Java Servlets | JSP | Postgres | Javascript | AJAX | Jquery",
          },
      ];
  return (
    <section className="Internship">
      <PageHeader title="Internships"/>
      <div>
      {internships.map((internship, index) => (
        <InternshipEntry
          key={index}
          companyName={internship.companyName}
          role={internship.role}
          duration={internship.duration}
          description={internship.description}
          skillsLearned={internship.skillsLearned}
        />
      ))}
    </div>
      <div className="Social">
            <SocialIcons />
      </div>
    </section>
  );
};

export default Internships;



    