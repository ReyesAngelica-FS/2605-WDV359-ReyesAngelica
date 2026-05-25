import { Link } from "react-router-dom";


function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="nav-logo">
                Ala Rey Studios
            </Link>

            <nav className="nav-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/gallery">Gallery</Link>
                <a href="#contact">Contact</a>
            </nav>

            <a href="#contact" className="nav-button">
                Inquire Now
            </a>
        </header>
    );
}

export default Navbar;