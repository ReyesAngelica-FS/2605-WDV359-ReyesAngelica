function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="nav-logo">
            Ala Rey Studios
            </a>
    
            <nav className="nav-menu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>
    
            <a href="#contact" className="nav-button">
            Inquire Now
            </a>
        </header>
    );
}

export default Navbar;