import "./Header.css"
function Header(){
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Ilias</em></strong><br/>
                    a BackEnd developer
                </h1>
                <div className="header__text">
                    {/*<p>with passion for learning and creating.</p>*/}
                </div>
                <a href="https://www.linkedin.com/in/ilyas-junusov-67a965235/" className="btn">Go to my CV</a>
            </div>
        </header>
    )
}

export default Header;