// Images
import weddingImg from "../assets/images/WeddingVenue.png";
import birthdayImg from "../assets/images/BirthdayVenue.png";
import babyShowerImg from "../assets/images/BabyShower.png";
import privateEventImg from "../assets/images/PrivateEvent.png";


function GalleryPreview() {
        const galleries = [
        {
            title: "Weddings",
            description: "Elegant celebrations designed with timeless detail.",
            image: weddingImg,
        },
        {
            title: "Birthdays",
            description: "Personalized parties created around your vision.",
            image: birthdayImg,
        },
        {
            title: "Baby Showers",
            description: "Soft, meaningful moments styled with care.",
            image: babyShowerImg,
        },
        {
            title: "Private Events",
            description: "Custom experiences for intimate gatherings.",
            image: privateEventImg,
        },
        ];
    
        return (
        <section id="gallery" className="gallery-section">
            <p className="eyebrow center">Featured Galleries</p>
            <h2>Celebrations Designed With Style</h2>
            <p className="gallery-intro">
            Explore curated event styles and inspiration created for memorable
            moments.
            </p>
    
            <div className="gallery-grid">
            {galleries.map((gallery) => (
                <article className="gallery-card" key={gallery.title}>
                <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="gallery-image"
                />
                <div className="gallery-content">
                    <h3>{gallery.title}</h3>
                    <p>{gallery.description}</p>
                </div>
                </article>
            ))}
            </div>
        </section>
        );
    }

export default GalleryPreview;