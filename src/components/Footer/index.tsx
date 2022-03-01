import c from './styles.module.scss';

import logo from '../../images/logo.svg';
import { BsFacebook, BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className={c.footer_left}>
                <img src={logo} alt='logo' />
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className={c.footer_right}>
                <div>
                    <BsFacebook color='white' />
                    <BsTwitter color='white' />
                    <BsPinterest color='white' />
                    <BsInstagram color='white' />
                </div>
                <p>@ 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}