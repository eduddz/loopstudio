import interactiveImg from '../../assets/mobile/image-interactive.jpg'
import curiosityImg from '../../assets/mobile/image-curiosity.jpg';
import deepEarthImg from '../../assets/mobile/image-deep-earth.jpg';
import fisheyeImg from '../../assets/mobile/image-fisheye.jpg';
import fromAboseImg from '../../assets/mobile/image-from-above.jpg';
import gridImg from '../../assets/mobile/image-grid.jpg';
import heroImg from '../../assets/mobile/image-hero.jpg';
import nightArcadeImg from '../../assets/mobile/image-night-arcade.jpg';
import pocketBorealisImg from '../../assets/mobile/image-pocket-borealis.jpg';
import soccerTeamImg from '../../assets/mobile/image-soccer-team.jpg';

import styles from './styles.module.scss';

export function Main() {
    return(
        <main className={styles.wrapper}>
            <div className={styles.main}>
                <img src={interactiveImg} alt="interactive" />
                <h2>The Leader in interactive vr</h2>
                <p>Founded in 2011, Loostudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                <h2>Our creations</h2>

                <div className={styles.one}>
                    <img src={deepEarthImg} alt="curiosity" />
                    <p>
                        Deep
                        <br />
                        Earth
                    </p>
                    <img src={nightArcadeImg} alt="curiosity" />
                    <p>
                        Night
                        <br />
                        Arcade
                    </p>
                    <img src={soccerTeamImg} alt="curiosity" />
                    <p>
                        Soccer
                        <br />
                        Team vr
                    </p>
                    <img src={gridImg} alt="curiosity" />
                    <p>
                        The
                        <br />
                        Grid
                    </p>
                    <img src={fromAboseImg} alt="curiosity" />
                    <p>
                        From up
                        <br />
                        above vr
                    </p>
                    <img src={pocketBorealisImg} alt="curiosity" />
                    <p>
                        Pocket
                        <br />
                        Borealis
                    </p>
                    <img src={curiosityImg} alt="curiosity" />
                    <p>
                        The
                        <br />
                        Curiosity
                    </p>
                    <img src={fisheyeImg} alt="curiosity" />
                    <p>
                        Make it
                        <br />
                        fisheye
                    </p>

                    <button>See all</button>
                </div>
            </div>
        </main>
    )
}