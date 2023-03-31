import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/profile.jpeg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
               
                <h1><Link smooth to="/#start" className="h1_links">Nayn Tashi</Link></h1>

                <img src={logo} />
               
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Life is short, so is this bio</Link></li>

                    
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                    <li className="sidebar-nav-icons"> <a href="https://goodreads.com/user/show/164292027-nayn" rel="opener noreferrer" target="_blank" className="fa fas solid fa-ticket fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/CrowBastard_" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/dexter_roll_it_nay/" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://mstdn.social/@CrowBastard_" rel="opener noreferrer" target="_blank" className="fa solid fa-pinterest fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://letterboxd.com/crowbastard_/" rel="opener noreferrer" target="_blank" className="fa solid fa-film fa-lg"></a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar