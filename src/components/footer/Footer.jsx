import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Bérénice Briand</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">À propos</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projets</a>
                    </li>

                    {/*<li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>*/}
                </ul>

                <div className="footer__contact">
                    <a href="mailto:berenice.briand.pro@gmail.com">berenice.briand.pro@gmail.com</a>
                </div>

                {/*<div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/b%C3%A9r%C3%A9nice-briand-8948902a8/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://github.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>*/}

                


                <span className="footer__copy">&copy; 2024 Bérénice Briand, inspiré du tutoriel de Crypticalcoder</span>
            </div>
        </footer>
    )
}

export default Footer