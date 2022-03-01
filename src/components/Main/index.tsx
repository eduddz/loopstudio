import c from './styles.module.scss';

import interactiveDesktop from '../../images/desktop/image-interactive.jpg';
import interactiveMobile from '../../images/mobile/image-interactive.jpg';

import curiosityD from '../../images/desktop/image-curiosity.jpg';
import curiosityM from '../../images/mobile/image-curiosity.jpg';
import deepD from '../../images/desktop/image-deep-earth.jpg';
import deepM from '../../images/mobile/image-deep-earth.jpg';
import fisheyeD from '../../images/desktop/image-fisheye.jpg';
import fisheyeM from '../../images/mobile/image-fisheye.jpg';
import aboveD from '../../images/desktop/image-from-above.jpg';
import aboveM from '../../images/mobile/image-from-above.jpg';
import gridD from '../../images/desktop/image-grid.jpg';
import gridM from '../../images/mobile/image-grid.jpg';
import soccerD from '../../images/desktop/image-soccer-team.jpg';
import soccerM from '../../images/mobile/image-soccer-team.jpg';
import arcadeD from '../../images/desktop/image-night-arcade.jpg';
import arcadeM from '../../images/mobile/image-night-arcade.jpg';
import pocketD from '../../images/desktop/image-pocket-borealis.jpg';
import pocketM from '../../images/mobile/image-pocket-borealis.jpg';

export const Main = () => {

    const device = window.screen.width < 768;

    return (
        <main className={c.main}>
            <div className={c.main_content}>
                <img src={device ? interactiveMobile : interactiveDesktop} alt="interactive" />
                <div className={c.main_content_text}>
                    <h2>THE LEADER IN INTERACTIVE VR</h2>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>

            <div className={c.main_creations}>
                <h2>OUR CREATIONS</h2>
                <div className={c.main_creations_gallery}>
                    <div>
                        <img src={device ? deepM : deepD} alt='deep earth' />
                        <h3>DEEP EARTH</h3>
                    </div>
                    <div>
                        <img src={device ? arcadeM : arcadeD}  alt='night arcade' />
                        <h3>NIGHT ARCADE</h3>
                    </div>
                    <div>
                        <img src={device ? soccerM : soccerD} alt='soccer team vr' />
                        <h3>SOCCER TEAM VR</h3>
                    </div>
                    <div>
                        <img src={device ? gridM : gridD} alt='the grid' />
                        <h3>THE GRID</h3>
                    </div>
                    <div>
                        <img src={device ? aboveM : aboveD} alt='from up above vr' />
                        <h3>FROM UP ABOVE VR</h3>
                    </div>
                    <div>
                        <img src={device ? pocketM : pocketD} alt='pocket borealis' />
                        <h3>POCKET BOREALIS</h3>
                    </div>
                    <div>
                        <img src={device ? curiosityM : curiosityD} alt='the curiosity' />
                        <h3>THE CURIOSITY</h3>
                    </div>
                    <div>
                        <img src={device ? fisheyeM : fisheyeD} alt='make it fisheye' />
                        <h3>MAKE IT FISHEYE</h3>
                    </div>
                </div>
                <button>SEE ALL</button>
            </div>
        </main>
    )
}