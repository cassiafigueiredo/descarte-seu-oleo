import styles from "../Dicas/Dicas.module.css"


function Dicas() {
    return (
        <>
            <div className={styles.containerDicas}>
                <h1 className={styles.h1Dicas}>
                    Dicas para o descarte
                </h1>

                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row">
                        <div class="col">
                            <div className="card" style={{width: 200}}>
                                <img src="\public\images\frigideira.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick     example         text to build on the    card                           title   and make up the bulk of the   card's        content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        <div className="card" style={{width: 200}}>
                                <img src="\public\images\garrafa.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick     example         text to build on the    card                           title   and make up the bulk of the   card's        content.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        <div className="card" style={{width: 200}}>
                                <img src="\public\images\peneira.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">Some quick     example         text to build on the    card                           title   and make up the bulk of the   card's        content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Dicas