import styles from "../Home/Home.module.css"


function Home() {
    return (
        <>
        <div className={styles.backgroundHome}>
        <nav className="navbar navbar-expand-lg d-flex justify-content-end">
                <div className="container-fluid">
                    
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        </nav>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <h1 className={styles.h1Home}>
                        Descarte seu óleo de forma correta e consciente.
                    </h1>
                </div>
        </div>
        </>
    )
}

export default Home 