import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../pages/Contact.module.css';


export default function Contact() {
    return (
        <>
        {/* En-tête du site */}
         <Header />


            <section className={styles.contactSection}>
            <h2 className={styles.contactTitle}>Contactez-moi</h2>
            <p className={styles.contactSubtitle}>
                Vous avez un projet ou une question ? Envoyez-moi un message, et je vous répondrai rapidement !
            </p>
            <form className={styles.contactForm}>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        className={styles.inputField}
                        required
                    />
                    <label htmlFor="name" className={styles.inputLabel}>Nom</label>
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        className={styles.inputField}
                        required
                    />
                    <label htmlFor="email" className={styles.inputLabel}>Email</label>
                </div>
                <div className={styles.inputGroup}>
                    <textarea
                        id="message"
                        name="message"
                        placeholder=" "
                        className={styles.inputField}
                        rows="5"
                        required
                    ></textarea>
                    <label htmlFor="message" className={styles.inputLabel}>Message</label>
                </div>
                <button type="submit" className={styles.submitButton}>Envoyer</button>
            </form>
        </section>
            {/* Pied de page du site */}
            <Footer />
        </>
    );
}