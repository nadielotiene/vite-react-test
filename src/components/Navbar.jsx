import React from "react"
import airbnb from "/airbnb.png"
import search from "/search.png"
import globe from "/globe.png"
import menu from "/menu.png"
import user from "/user.png"

export default function Navbar() {
    return (
        <nav className="nav-div">
            <span className="logo-span">
                <img className="logo" src={airbnb} alt="airbnb logo" />
                <h2 className="nav-title">
                    kenbnb
                </h2>
            </span>
            <button className="search-btn">Anywhere ⎪ Any week ⎪ Add guests
                <img className="search-icon" src={search} alt="search" /></button>
            <span className="user-span">
                <button className="renter-btn">
                    Kenbnb your home
                </button>
                <button className="globe-btn">
                    <img className="globe" src={globe} alt="globe" />
                </button>
                <button className="user-menu-btn">
                    <img className="menu" src={menu} alt="globe" />
                    <img className="user" src={user} alt="user" />
                </button>
            </span>
        </nav>
    )
}
