import img from "./../img/projects/02-big.jpg"
import BtnGitHub from "../components/btnGitHub/BtnGitHub.js";
const Project = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">video service</h1>

                    <img
                        src={img}
                        alt= "title"
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <BtnGitHub></BtnGitHub>
                </div>
            </div>
        </main>
    );
}

export default Project;