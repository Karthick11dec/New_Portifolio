import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="contact">
                    <a href="mailto:valentineelum@gmail.com" target="_blank" rel="noopener noreferrer" className="special"><span className="icon icon-moonmail4"></span> Hire Me</a>
                    <ul className="socials">
                        <li>
                            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" >
                                <span><i class="far fa-file-pdf fa-2x"></i></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Karthick11dec?tab=repositories" target="_blank" rel="noopener noreferrer" >
                                <span><i class="fab fa-github fa-2x"></i></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <p>
                    Designed by <span className="icon icon-moonheart"></span>
                    <a href="karthickraja11dec@gmail.com" target="_blank" rel="noopener noreferrer"> Karthick Raja</a>
                </p>
            </footer>
        )
    }
}

export default Footer;