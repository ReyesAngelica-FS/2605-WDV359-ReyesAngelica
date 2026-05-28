import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import GalleryPreview from "../components/GalleryPreview";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
        <Navbar />

        <main>
            <Hero />
            <Services />
            <GalleryPreview />
            <About />
            <CTA />
        </main>

        <Footer />
        </>
    );
}

export default Home;