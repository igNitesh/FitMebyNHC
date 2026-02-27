import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackingSection from "../components/TrackingSection";

export default function TrackPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
                <TrackingSection />
            </main>
            <Footer />
        </div>
    );
}
