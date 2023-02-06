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
    )
}

export default Header
