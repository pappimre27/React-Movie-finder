import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
    return (
        <nav id="navbar" >
            <h1 className="main-item">
                {title}
            </h1>
            <ul>
                <li>
                    <Link className="link-home" to='/'>Home</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Movie Info App'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar;

