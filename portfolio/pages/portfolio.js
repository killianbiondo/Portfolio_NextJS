import Header from '../components/Header'; // Import du Header
import Footer from '../components/Footer'; // Import du Footer
import styles from '../pages/Portfolio.module.css'; // Import des styles CSS

export default function Portfolio() {
    return (
        <>
            {/* En-tête du site */}
            <Header />

            {/* Contenu principal : Section portfolio */}
            <main className={styles.portfolioSection}>
                {/* Titre principal */}
                <h2 className={styles.portfolioTitle}>Mes Projets</h2>

                {/* Conteneur de grille pour les projets */}
                <div className={styles.projectGrid}>

                    {/* Projet 1 */}
                    <div className={styles.projectCard}>
                        <h3>Projet 1 : Mon Site Web</h3>
                        <p>Découvrez mon site web personnel, conçu avec soin pour refléter mes compétences et mon style unique.</p>
                        <a
                            href="http://www.biondokillian.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                        >
                            Voir mon site
                        </a>
                    </div>

                    {/* Projet 2 */}
                    <div className={styles.projectCard}>
                        <h3>Projet 2 : Mon jeu Pong</h3>
                        <p>Un petit jeu codée en Javascript.</p>
                        <a
                            href="./pong.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                        >
                            Voir le projet
                        </a>
                    </div>

                    {/* Projet 3 */}
                    <div className={styles.projectCard}>
                        <h3>Mes certifications</h3>
                        <p>Ici, le document avec les certifications que j'ai pu obtenir durant ma scolarité</p>
                        <a
                            href="../documents/certifications.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectLink}
                        >
                            Voir le document
                        </a>
                    </div>
                </div>
            </main>

            {/* Pied de page du site */}
            <Footer />
        </>
    );
}
