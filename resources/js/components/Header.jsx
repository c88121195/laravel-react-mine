import React from 'react';
import Router from '../router/Index';

const Header = () => (
    <>
        {/* // <!-- header --> */}
        <div className="nav">
            {/* <!-- LOGO --> */}
            <div className="logo">
                <a href="/">
                    <img className="LanceDom" src="https://github.com/PHPD08-Village/PHPD08-Team/blob/main/img/Icon/LOGO.png?raw=true" alt="logo" /></a>
                <a href="/">LanceDom</a>
            </div>
            {/* <!-- navbar --> */}
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/freelancer">Freelancer</a>
                <a href="/owner">Owner</a>
                <a href="/detail">Detail</a>
                <a href="#">Testimonail </a>
                <a href="#">FAQ </a>
                <a href="/star">Star </a>
            </div>
            {/* <!-- member --> */}
            <div className="member">
                <a href="#">Login</a>
                <a className="sign" href="">Sign up</a>
            </div>
        </div>
        <Router />
    </>
);

export default Header;
