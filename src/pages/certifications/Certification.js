import Skill from "./Skills";
import SocialIcons from "../../components/SocialIcons";
import "./Skill.css";

function Certification() {
    return (
        <div>
        <div className="skills">

            <h1>Skills</h1>

            <div className="skillsGrid">

                    <Skill source="https://www.vectorlogo.zone/logos/java/java-ar21.svg" alt="The logo icon for Java" title="Java"/>
                    <Skill source="https://www.svgrepo.com/show/303480/c-logo.svg" alt="The logo icon for C++" title="C++"/>
                    <Skill source="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="The logo icon for C" title="C"/>
                    <Skill source="https://www.cdnlogo.com/logos/p/81/python.svg" alt="The Logo icon for Python" title="Python"/>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                    <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
                    </div>
                    
                        
                    
                    </div>
                    <div className="Social">
                    <SocialIcons />
                    </div>
                    </div>      
                    )
                }

export default Certification;
