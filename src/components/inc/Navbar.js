import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand text-info" href="/"><span id='logo'>React.js</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link btn btn-info text-light">New Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
);
}

export default Navbar;