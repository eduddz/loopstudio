import { useState } from 'react';

import c from './styles.module.scss';

import logo from '../../images/logo.svg';
import iconHamburger from '../../images/icon-hamburger.svg';
import iconClose from '../../images/icon-close.svg';

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={c.header}>
            <div className={c.header_content}>
                <img src={logo} alt='logo' />
                <nav className={`${c.header_content_nav} ${menuOpen ? c.isMenu : ''}`}>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </nav>
                <div className={c.header_content_toggle}>
                    <img 
                        onClick={() => setMenuOpen(!menuOpen)}
                        src={menuOpen ? iconClose : iconHamburger} 
                        alt='icon menu' 
                    />
                </div>
            </div>
            <div className={c.header_title}>
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </header>
    )
}