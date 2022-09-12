import './Header.css'

const Header = () => {
    return (
        <header className="container-fluid header-element">
            <div className="row">
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="navbar-brand logo" href="#">
                                <img src="../../.././car-logo.png" alt="Car"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active tabs" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tabs" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tabs" aria-current="page" href="#">Contacts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active tabs" aria-current="page" href="#">Support</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active languages" aria-current="page" href="#">AZ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active languages" aria-current="page" href="#">EN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active languages" aria-current="page" href="#">RU</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-md-4 col-sm-12 col-xs-12">
        //                 <ul className="nav justify-content-center">
        //                     <li className="nav-item">
        //                         <a className="navbar-brand logo" href="#">
        //                             <img src="../../.././car-logo.png" alt="Car"/>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                     data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        //                     aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        //                 <div className="col-md-4 col-sm-12 col-xs-12">
        //                     <ul className="navbar-nav">
        //                         <li className="nav-item">
        //                             <a className="nav-link active tabs" href="#">Home</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link active tabs" href="#">About</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link active tabs" href="#">Contacts</a>
        //                         </li>
        //                         <li className="nav-item">
        //                             <a className="nav-link active tabs" href="#">Support</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col-md-4 col-sm-12 col-xs-12">
        //                 <ul className="nav justify-content-center">
        //                     <li className="nav-item">
        //                         <a className="nav-link active languages" aria-current="page" href="#">AZ</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link active languages" aria-current="page" href="#">EN</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link active languages" aria-current="page" href="#">RU</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header