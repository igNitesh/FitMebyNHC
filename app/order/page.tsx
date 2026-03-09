import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderSection from "../components/OrderSection";

export default function OrderPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
                <OrderSection />
            </main>
            <Footer />
        </div>
    );
}
