import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
            <Header></Header>
            <main className="section">
                <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Front-End</h2>
                            <p>JavaScript, ReactJS, Redux, HTML, CSS, NPM</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Back-End</h2>
                            <p>NodeJS, MySQL, MongoDB, PHP, Laravel, C#, .NET</p>
                        </li>
                    </ul>

                </div>
            </main>
        </>

    )
}

export default Home;