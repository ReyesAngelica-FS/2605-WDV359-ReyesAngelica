import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                <h2>Ala Rey Studios</h2>
                <p>
                    Creating elegant experiences, timeless celebrations, and
                    unforgettable moments.
                </p>

                <div className="footer-socials">
                    <a href="#" aria-label="Facebook">
                    <FaFacebookF />
                    </a>

                    <a href="#" aria-label="Instagram">
                    <FaInstagram />
                    </a>

                    <a href="#" aria-label="YouTube">
                    <FaYoutube />
                    </a>

                    <a href="#" aria-label="X">
                    <FaXTwitter />
                    </a>
                </div>
                </div>

                <nav className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/gallery">Gallery</a>
                    <a href="/contact">Contact</a>
                </nav>

                <div className="footer-contact">
                    <p>Email: hello@alareystudios.com</p>
                    <p>Instagram: @alareystudios</p>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Ala Rey Studios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;