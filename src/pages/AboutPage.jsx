import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
    return (
        <>
        {/* ======================================================
            NAVBAR
        ====================================================== */}
        <Navbar />

        {/* ======================================================
            MAIN ABOUT PAGE
        ====================================================== */}
        <main style={styles.aboutPage}>

            {/* ======================================================
                ABOUT HERO SECTION
            ====================================================== */}
            <section style={styles.aboutHero}>
            <p style={styles.eyebrow}>About Ala Rey Studios</p>

            <h1 style={styles.heroTitle}>
                Designing Moments With Meaning
            </h1>

            <p style={styles.heroText}>
                Ala Rey Studios is a creative event planning brand focused on
                elegant details, thoughtful design, and unforgettable celebrations.
            </p>
            </section>

            {/* ======================================================
                ABOUT STORY SECTION
            ====================================================== */}
            <section style={styles.aboutStory}>
            <div style={styles.aboutImageBox}>
                About Image Placeholder
            </div>

            <div style={styles.aboutStoryContent}>
                <p style={styles.eyebrow}>Our Story</p>

                <h2 style={styles.storyTitle}>
                Where creativity meets celebration.
                </h2>

                <p style={styles.storyText}>
                Ala Rey Studios was created from a passion for bringing beautiful
                ideas to life. Every event is approached with care, organization,
                and a strong eye for detail.
                </p>

                <p style={styles.storyText}>
                From intimate gatherings to styled celebrations, the goal is to
                create experiences that feel personal, polished, and memorable.
                </p>
            </div>
            </section>

            {/* ======================================================
                VALUES SECTION
            ====================================================== */}
            <section style={styles.valuesSection}>
            <p style={styles.eyebrowCenter}>What We Value</p>

            <h2 style={styles.valuesTitle}>
                Our Creative Approach
            </h2>

            <div style={styles.valuesGrid}>

                <div style={styles.valueCard}>
                <h3 style={styles.valueHeading}>Creativity</h3>

                <p style={styles.valueText}>
                    Every event begins with a unique vision and thoughtful design.
                </p>
                </div>

                <div style={styles.valueCard}>
                <h3 style={styles.valueHeading}>Organization</h3>

                <p style={styles.valueText}>
                    Planning details are handled with structure, care, and purpose.
                </p>
                </div>

                <div style={styles.valueCard}>
                <h3 style={styles.valueHeading}>Experience</h3>

                <p style={styles.valueText}>
                    The final goal is always a celebration that feels meaningful.
                </p>
                </div>

            </div>
            </section>
        </main>

        {/* ======================================================
            FOOTER
        ====================================================== */}
        <Footer />
        </>
    );
}

export default AboutPage;


/* ======================================================
    STYLES
====================================================== */

const styles = {

    /* ======================================================
        MAIN PAGE
    ====================================================== */

    aboutPage: {
        backgroundColor: "#f8f5f2",
        color: "#1e1e1e",
        fontFamily: "Poppins, sans-serif",
    },

    /* ======================================================
        HERO SECTION
    ====================================================== */

    aboutHero: {
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

    eyebrowCenter: {
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "0.8rem",
        marginBottom: "20px",
        color: "#b89b72",
        textAlign: "center",
    },

    heroTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "3rem",
        marginBottom: "20px",

        // FIXED TEXT COLOR
        color: "#1e1e1e",

        // Stronger luxury feel
        fontWeight: "700",

        // Better spacing
        letterSpacing: "-2px",

    },

    heroText: {
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#555",
    },

    /* ======================================================
        ABOUT STORY SECTION
    ====================================================== */

    aboutStory: {
        padding: "100px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
    },

    aboutImageBox: {
        minHeight: "520px",
        backgroundColor: "#ddd2c4",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#777",
    },

    aboutStoryContent: {},

    storyTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "3rem",
        marginBottom: "24px",
        lineHeight: "1.1",
    },

    storyText: {
        color: "#555",
        lineHeight: "1.8",
        marginBottom: "20px",
    },

    /* ======================================================
        VALUES SECTION
    ====================================================== */

    valuesSection: {
        padding: "90px 64px",
        backgroundColor: "#ffffff",
        textAlign: "center",
    },

    valuesTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "2.8rem",
        marginBottom: "48px",

            // FIXED TEXT COLOR
        color: "#1e1e1e",

        // Stronger luxury feel
        fontWeight: "700",

        // Better spacing
        letterSpacing: "-2px",

    },

    valuesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "28px",
    },

    valueCard: {
        border: "1px solid #e6ddd4",
        padding: "40px 28px",
        backgroundColor: "#fffaf6",
    },

    valueHeading: {
        fontFamily: "Playfair Display, serif",
        fontSize: "1.5rem",
        marginBottom: "16px",
    },

    valueText: {
        color: "#555",
        lineHeight: "1.7",
    },
};