import { useState, useCallback, memo } from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';

const MainNavbar = memo(() => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const openSideNav = useCallback(() => {
        setSideNavOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeSideNav = useCallback(() => {
        setSideNavOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    return (
        <div>
            <header className='header'>
                <nav className="navbar">
                    <div className="logo">
                        <img src="https://cdn.glitch.global/02a02e56-c6dd-4845-b7d3-20bc8ccecb0c/home-logo.png?v=1726478095386"
                            alt="Veltria Logo" loading="lazy" />
                        <div className="logo-text">
                            <span className="brand-name">Veltria</span>
                            <p className="tagline">Innovate. Adapt. Succeed.</p>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blog">Blogs</a></li>
                        <li><a href="/jobs">Jobs</a></li>
                        <li><a href="/aboutus">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <button className="menu-btn" aria-label="Open Menu" onClick={openSideNav}>
                        &#9776;
                    </button>
                </nav>
            </header>

            <div className={`side-nav ${sideNavOpen ? 'open' : ''}`} role="navigation" aria-label="Side Navigation">
                <button className="close-btn" aria-label="Close Menu" onClick={closeSideNav}>
                    &times;
                </button>
                <ul className="side-nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/blog">Blogs</a></li>
                    <li><a href="/jobs">Jobs</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
});

// Adding the displayName explicitly
MainNavbar.displayName = 'MainNavbar';

export default MainNavbar;
