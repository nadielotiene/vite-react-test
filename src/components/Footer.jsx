import React from "react"
import globe from "/globe.png"

export default function Footer() {
    return (
        <footer className="footer-div">
            <small>
                <a className="footer-info-left" href="#">
                    © 2023 Kenneth Velázquez • Terms  • Sitemap  • Privacy • Destinations
                </a>
            </small>
            <small>
                <a className="footer-info-right" href="#">
                    <img 
                        className="globe" src={globe} alt="globe" 
                    />
                    English (US) • $ USD • Support & resources
                </a>
            </small>
        </footer>
    )
}
