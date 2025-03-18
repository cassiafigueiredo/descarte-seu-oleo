import styles from "../Home/Home.module.css"

function Home() {
    return (
        <>
        <div className={styles.backgroundHome}>
        <nav className="navbar navbar-expand-lg d-flex justify-content-end me-3">
                <div className="container-fluid d-flex justify-content-end">
                    
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">dicas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">agenda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">causa</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        </nav>
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <h1 className={styles.h1Home}>
                        Descarte seu óleo de forma correta e consciente.
                    </h1>
                    <div className="d-flex justify-content-center mt-4">
                    <button className={styles.botaoConhecer}>Conhecer!</button>
                    </div>
                </div>
                
                
        </div>
        </>
    )
}

export default Home 