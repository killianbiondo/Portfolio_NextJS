import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../pages/About.module.css';

export default function About() {
    return (
        <div>
            <Header />
            <main className={styles.about}>
                <h1>À propos de moi</h1>
                <p>
                    Bonjour, je suis un apprenti développeur passionné par l'informatique et
                    les solutions technologiques innovantes.
                </p>
                <p>Durant mon temps libre, je travaille sur des projets que j'exposerai ici.</p>

                <h2>Langages et technologies que je maîtrise</h2>
                <div className={styles.skills}>
                    {/* ReactJS */}
                    <div className={styles.skillCard}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="ReactJS"
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>ReactJS</span>
                    </div>
                    {/* Symfony */}
                    <div className={styles.skillCard}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                            alt="Symfony"
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>Symfony</span>
                    </div>
                    {/* JavaScript */}
                    <div className={styles.skillCard}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="JavaScript"
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>JavaScript</span>
                    </div>
                    {/* HTML */}
                    <div className={styles.skillCard}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            alt="HTML"
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>HTML</span>
                    </div>
                    {/* CSS */}
                    <div className={styles.skillCard}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                            alt="CSS"
                            className={styles.skillIcon}
                        />
                        <span className={styles.skillName}>CSS</span>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
