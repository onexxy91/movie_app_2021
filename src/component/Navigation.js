import React from "react"
import {Link} from "react-router-dom"
import "./Navigation.css"

export default function Navigation() {
    return <div className="nav">
        <div className="nav_logo">
            <i><h3>Logo</h3></i>
        </div>
        <div className="nav_menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
        <div className="nav_foot">
            <button>button</button>
        </div>

    </div>
}
