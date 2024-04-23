"use client";
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fadeIn, fadeOut, slideIn, slideOut } from '@/blogs/animations'; // Ruta relativa al archivo animations.js

// Ejemplo de datos de entradas de blog
const blogPosts = [
    { title: 'Título del primer post', date: '23 de abril de 2024', content: 'Contenido del primer post...' },
    { title: 'Título del segundo post', date: '24 de abril de 2024', content: 'Contenido del segundo post...' },
    // Agrega más entradas aquí
];

export default function BackgroundBeamsDemo() {
    useEffect(() => {
        fadeIn();
        slideIn();

        return () => {
            fadeOut();
            slideOut();
        };
    }, []);

    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center antialiased animate-fade-in animate-slide-in">
                <h1 className="text-3xl text-text mb-8">Blog Page</h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-500">{post.date}</p>
                            <p className="mt-2">{post.content.slice(0, 100)}...</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
