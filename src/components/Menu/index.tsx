import styles from './styles.module.scss';
import menuCloseImg from '../../assets/icon-close.svg';
import logoImg from '../../assets/logo.svg';

export function Menu({ onClose = () => {} }) {
    return (
        <nav className={styles.menu}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <img src={logoImg} alt="logo loopstudios" />
                    <img src={menuCloseImg} onClick={onClose} alt="icon close menu" />
                </div>
                <ul>
                    <li>about</li>
                    <li>careers</li>
                    <li>events</li>
                    <li>products</li>
                    <li>support</li>
                </ul>
            </div>
        </nav>
    )
}