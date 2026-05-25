import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
    return (
        <>
        <Navbar />

        <main style={styles.contactPage}>
            <section style={styles.hero}>
            <p style={styles.eyebrow}>Contact Ala Rey Studios</p>
            <h1 style={styles.heroTitle}>Let’s Start Planning</h1>
            <p style={styles.heroText}>
                Share a few details about your event, and we’ll connect with you to
                begin creating something beautiful.
            </p>
            </section>

            <section style={styles.contactSection}>
            <form style={styles.form}>
                <label style={styles.label}>Full Name</label>
                <input style={styles.input} type="text" placeholder="Your name" />

                <label style={styles.label}>Email</label>
                <input style={styles.input} type="email" placeholder="Your email" />

                <label style={styles.label}>Event Type</label>
                <select style={styles.input}>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Baby Shower</option>
                <option>Private Event</option>
                <option>Corporate Event</option>
                </select>

                <label style={styles.label}>Message</label>
                <textarea
                style={styles.textarea}
                placeholder="Tell us about your event..."
                ></textarea>

                <button style={styles.button} type="button">
                Submit Inquiry
                </button>
            </form>

            <div style={styles.infoBox}>
                <p style={styles.eyebrow}>Get In Touch</p>
                <h2 style={styles.infoTitle}>We’d love to hear your vision.</h2>
                <p style={styles.infoText}>
                Whether you already have a theme in mind or need help building the
                full concept, Ala Rey Studios can help guide the planning process.
                </p>

                <p style={styles.contactText}>Email: hello@alareystudios.com</p>
                <p style={styles.contactText}>Instagram: @alareystudios</p>
                <p style={styles.contactText}>Location: Tampa, FL</p>
            </div>
            </section>
        </main>

        <Footer />
        </>
    );
}

export default ContactPage;

const styles = {
    contactPage: {
        backgroundColor: "#f8f5f2",
        color: "#1e1e1e",
        fontFamily: "Poppins, sans-serif",
    },

    hero: {
        padding: "100px 64px",
        textAlign: "center",
        backgroundColor: "#fffaf6",
    },

    eyebrow: {
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "0.8rem",
        marginBottom: "20px",
        color: "#b89b72",
    },

    heroTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "4rem",
        marginBottom: "20px",
    },

    heroText: {
        maxWidth: "760px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#555",
    },

    contactSection: {
        padding: "90px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        backgroundColor: "#ffffff",
    },

    form: {
        backgroundColor: "#fffaf6",
        border: "1px solid #e6ddd4",
        padding: "42px",
    },

    label: {
        display: "block",
        fontWeight: "600",
        marginBottom: "8px",
    },

    input: {
        width: "100%",
        padding: "14px",
        marginBottom: "22px",
        border: "1px solid #d8cbbd",
        fontSize: "1rem",
        fontFamily: "Poppins, sans-serif",
    },

    textarea: {
        width: "100%",
        minHeight: "160px",
        padding: "14px",
        marginBottom: "24px",
        border: "1px solid #d8cbbd",
        fontSize: "1rem",
        fontFamily: "Poppins, sans-serif",
    },

    button: {
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        padding: "14px 28px",
        border: "none",
        fontWeight: "700",
        cursor: "pointer",
    },

    infoBox: {
        padding: "42px",
    },

    infoTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "3rem",
        marginBottom: "24px",
    },

    infoText: {
        color: "#555",
        lineHeight: "1.8",
        marginBottom: "32px",
    },

    contactText: {
        color: "#555",
        marginBottom: "14px",
    },
};