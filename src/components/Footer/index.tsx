
import logoImg from '../../assets/logo.svg';
import facebookImg from '../../assets/icon-facebook.svg';
import twitterImg from '../../assets/icon-twitter.svg';
import pinterestImg from '../../assets/icon-pinterest.svg';
import instragramImg from '../../assets/icon-instagram.svg';

import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div>
                <img src={logoImg} alt="loopstudios" />
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
                <div>
                    <img src={facebookImg} alt="facebook icon" />
                    <img src={twitterImg} alt="twitter icon" />
                    <img src={pinterestImg} alt="pinterest icon" />
                    <img src={instragramImg} alt="instagram icon" />
                </div>
                <p>&copy; 2021 loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}