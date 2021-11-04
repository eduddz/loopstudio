import { Menu } from "../Menu";

import logoImg from '../../assets/logo.svg';
import menuHamburgerImg from '../../assets/icon-hamburger.svg';

import styles from './styles.module.scss';
import { useState } from "react";


export function Header() {
    const [menu, setMenu] = useState(false);
    return(
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <img src={logoImg} alt="logo loopstudios" />
                    <img src={menuHamburgerImg} onClick={() => setMenu(!menu)} alt="icon menu" />
                    {
                        menu ?
                        <Menu onClose={() => setMenu(!menu)} />
                        :
                        null
                    }
                </div>

                <div className={styles.title}>
                    <h1>Immersive Experiences that deliver</h1>
                </div>
            </div>
        </header>
    )
}