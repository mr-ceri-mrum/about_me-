
import BtnGitHub from "../components/btnGitHub/BtnGitHub.js";
import {projectsList} from "./../helpers/ProjectsList.js"

import {useParams} from "react-router-dom";
const Project = () => {
    const {id} = useParams();
    const project = projectsList[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img
                        src={project.imgBig}
                        alt= {project.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    <BtnGitHub link ={project.gitHubLink}></BtnGitHub>
                </div>
            </div>
        </main>
    );
}

export default Project;