import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BackgroundBeamsDemo() {
    return (
        <>
            <Navbar />
            <section className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                <h1 className="text-2xl text-text">
                    Blog Page
                </h1>
            </section>
            <Footer />

        </>
    );
}
