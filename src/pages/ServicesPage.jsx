import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ServicesPage() {
    const services = [
        {
        title: "Full Service Planning",
        description:
            "Complete planning support from the first idea to the final celebration.",
        details:
            "This service is best for clients who want help managing the full event vision, timeline, vendor coordination, design direction, and overall experience.",
        },
        {
        title: "Design & Styling",
        description:
            "Creative event styling focused on color, décor, layout, and atmosphere.",
        details:
            "This service helps bring a theme or concept to life through intentional details, visual planning, and polished presentation.",
        },
        {
        title: "Day-of Coordination",
        description:
            "Support on the event day so everything runs smoothly and on schedule.",
        details:
            "This service is ideal for clients who have planned most of their event but need help managing the flow, setup, and final details.",
        },
    ];

    return (
        <>
        <Navbar />

        <main style={styles.servicesPage}>
            <section style={styles.hero}>
            <p style={styles.eyebrow}>Our Services</p>
            <h1 style={styles.heroTitle}>Planning With Purpose</h1>
            <p style={styles.heroText}>
                Ala Rey Studios offers creative planning and styling services
                designed to make every celebration feel personal, elegant, and
                unforgettable.
            </p>
            </section>

            <section style={styles.servicesList}>
            {services.map((service) => (
                <article style={styles.serviceCard} key={service.title}>
                <p style={styles.cardNumber}>✦</p>
                <h2 style={styles.cardTitle}>{service.title}</h2>
                <p style={styles.cardDescription}>{service.description}</p>
                <p style={styles.cardDetails}>{service.details}</p>
                </article>
            ))}
            </section>

            <section style={styles.processSection}>
            <p style={styles.eyebrow}>Our Process</p>
            <h2 style={styles.sectionTitle}>How We Bring Your Event To Life</h2>

            <div style={styles.processGrid}>
                <div style={styles.processStep}>
                <span style={styles.stepNumber}>01</span>
                <h3 style={styles.stepTitle}>Discover</h3>
                <p style={styles.stepText}>
                    We learn about your event, vision, style, goals, and must-have
                    details.
                </p>
                </div>

                <div style={styles.processStep}>
                <span style={styles.stepNumber}>02</span>
                <h3 style={styles.stepTitle}>Design</h3>
                <p style={styles.stepText}>
                    We create a clear design direction with colors, styling, layout,
                    and planning details.
                </p>
                </div>

                <div style={styles.processStep}>
                <span style={styles.stepNumber}>03</span>
                <h3 style={styles.stepTitle}>Celebrate</h3>
                <p style={styles.stepText}>
                    We help execute the plan so the final event feels organized,
                    beautiful, and meaningful.
                </p>
                </div>
            </div>
            </section>
        </main>

        <Footer />
        </>
    );
}

export default ServicesPage;

const styles = {
    servicesPage: {
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
        textAlign: "center",
    },

    heroTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "4rem",
        marginBottom: "20px",

            // FIXED TEXT COLOR
        color: "#1e1e1e",

        // Stronger luxury feel
        fontWeight: "700",

        // Better spacing
        letterSpacing: "-2px",

    },

    heroText: {
        maxWidth: "760px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#555",
    },

    servicesList: {
        padding: "90px 64px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "28px",
    },

    serviceCard: {
        backgroundColor: "#ffffff",
        border: "1px solid #e6ddd4",
        padding: "42px 30px",
    },

    cardNumber: {
        color: "#b89b72",
        fontSize: "1.5rem",
        marginBottom: "18px",
    },

    cardTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "1.8rem",
        marginBottom: "16px",

            // FIXED TEXT COLOR
        color: "#1e1e1e",

        // Stronger luxury feel
        fontWeight: "700",

        // Better spacing
        letterSpacing: "-2px",
    },

    cardDescription: {
        color: "#555",
        lineHeight: "1.7",
        marginBottom: "18px",
    },

    cardDetails: {
        color: "#777",
        lineHeight: "1.7",
        fontSize: "0.95rem",
    },

    processSection: {
        padding: "100px 64px",
        backgroundColor: "#ffffff",
        textAlign: "center",
    },

    sectionTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "3rem",
        marginBottom: "48px",

        // FIXED TEXT COLOR
        color: "#1e1e1e",

        // Stronger luxury feel
        fontWeight: "700",

        // Better spacing
        letterSpacing: "-2px",

    },

    processGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "28px",
    },

    processStep: {
        backgroundColor: "#fffaf6",
        border: "1px solid #e6ddd4",
        padding: "40px 28px",
    },

    stepNumber: {
        color: "#b89b72",
        fontWeight: "700",
        letterSpacing: "2px",
    },

    stepTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "1.6rem",
        marginTop: "16px",
        marginBottom: "12px",
    },

    stepText: {
        color: "#555",
        lineHeight: "1.7",
    },
};