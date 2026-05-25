import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GalleryPage() {
    const albums = [
        {
        title: "Elegant Wedding",
        category: "Wedding",
        description: "A timeless celebration with soft details and romantic styling.",
        },
        {
        title: "Blush Baby Shower",
        category: "Baby Shower",
        description: "A warm and delicate setup created for a meaningful celebration.",
        },
        {
        title: "Modern Birthday",
        category: "Birthday",
        description: "A stylish birthday experience with bold details and personal touches.",
        },
        {
        title: "Private Celebration",
        category: "Private Event",
        description: "An intimate gathering designed with elegance and care.",
        },
        {
        title: "Corporate Social",
        category: "Corporate",
        description: "A polished event experience created for professional gatherings.",
        },
        {
        title: "Garden Party",
        category: "Social Event",
        description: "A fresh outdoor celebration inspired by natural beauty.",
        },
    ];

    return (
        <>
        <Navbar />

        <main style={styles.galleryPage}>
            <section style={styles.hero}>
            <p style={styles.eyebrow}>Our Gallery</p>
            <h1 style={styles.heroTitle}>Event Albums</h1>
            <p style={styles.heroText}>
                Explore curated albums that showcase the style, theme, and details
                behind each Ala Rey Studios celebration.
            </p>
            </section>

            <section style={styles.albumSection}>
            <div style={styles.albumGrid}>
                {albums.map((album) => (
                <article style={styles.albumCard} key={album.title}>
                    <div style={styles.albumCollage}>
                    <div style={styles.featuredImage}></div>

                    <div style={styles.thumbnailGrid}>
                        <div style={styles.thumbnail}></div>
                        <div style={styles.thumbnail}></div>
                        <div style={styles.thumbnail}></div>
                        <div style={styles.thumbnail}></div>
                    </div>
                    </div>

                    <div style={styles.albumInfo}>
                    <h2 style={styles.albumTitle}>{album.title}</h2>
                    <p style={styles.albumCategory}>{album.category}</p>
                    <p style={styles.albumDescription}>{album.description}</p>
                    </div>
                </article>
                ))}
            </div>
            </section>
        </main>

        <Footer />
        </>
    );
}

export default GalleryPage;

const styles = {
    galleryPage: {
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

    albumSection: {
        padding: "90px 64px",
        backgroundColor: "#ffffff",
    },

    albumGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "42px",
    },

    albumCard: {
        backgroundColor: "#fffaf6",
    },

    albumCollage: {
        border: "1px solid #e6ddd4",
        backgroundColor: "#ffffff",
        padding: "8px",
    },

    featuredImage: {
        height: "260px",
        background: "linear-gradient(135deg, #ddd2c4, #f3ebe3)",
        marginBottom: "8px",
    },

    thumbnailGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
    },

    thumbnail: {
        height: "85px",
        backgroundColor: "#e8ded4",
    },

    albumInfo: {
        padding: "24px 0 0",
    },

    albumTitle: {
        fontFamily: "Playfair Display, serif",
        fontSize: "1.8rem",
        marginBottom: "8px",
    },

    albumCategory: {
        color: "#b89b72",
        fontWeight: "600",
        marginBottom: "12px",
    },

    albumDescription: {
        color: "#555",
        lineHeight: "1.7",
    },
};