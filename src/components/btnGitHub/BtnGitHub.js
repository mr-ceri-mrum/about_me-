import gitHubIcon from "./gitHub-black.svg"
import "./BtnGitHub.css"

const BtnGitHub = () => {
    return(
        <a href="#!" className="btn-outline">
           <img src={gitHubIcon} alt=""></img>
            GitHub repo
        </a>
    );
}

export default BtnGitHub;