import "./Footer.css"
import vk from "../../img/icons/vk.svg";
import inst from "../../img/icons/instagram.svg";
import twitter from "../../img/icons/twitter.svg";
import git from "../../img/icons/gitHub.svg";
import linkin from "../../img/icons/linkedIn.svg";

function Footer(){
    return( <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={inst} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={git} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkin} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;