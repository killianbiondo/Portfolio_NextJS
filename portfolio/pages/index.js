import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../pages/Home.module.css';

export default function Home() {
    return (
        <>
            {/* En-tête du site */}
            <Header />

        <div className={styles.homePage}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
                <p className={styles.subtitle}>Découvrez mes projets et compétences</p>
            </div>
        </div>
            {/* Pied de page du site */}
            <Footer />
        </>
    );
}
