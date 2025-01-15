import React from "react"; //1. Importar React.

//2. Crear el componente.
const Navbar = () => {
    
    //3. Code JS.
    const cohorte = "Spain-93";

    //4. Retorno un solo y solo un elemento HTML.
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{cohorte}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Acción</a></li>
                            <li><a className="dropdown-item" href="#">Otra acción</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Algo más aquí</a></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
    )
}


//5. Exporto mi componente.
export default Navbar;

//6. Importar el componente

//7. Utilizarlo