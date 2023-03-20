import Project from "../components/project/Project.js";
import {projectsList} from "./../helpers/ProjectsList.js";
const Projects = () => {
    return(
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projectsList.map((project,index) => {
                        return (
                            <Project
                                key={project.id}
                                title={project.title}
                                img={project.img}>
                                index = {index}
                            </Project> /*The title hits to properties */
                        );
                    })};


                </ul>
            </div>
        </main>
    );
}

export default Projects