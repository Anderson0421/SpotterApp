"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Ejemplo de datos de entradas de blog
const blogPosts = [
    { 
        title: 'Título del primer post', 
        date: '23 de abril de 2024', 
        content: 'Contenido del primer post...',
        imageUrl: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm1iv6bl1w5o9i4ppoh3i.png' // Ruta de la imagen para la primera entrada
    },
    { 
        title: 'Título del segundo post', 
        date: '24 de abril de 2024', 
        content: 'Contenido del segundo post...',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQELcokKF66ciA/article-cover_image-shrink_720_1280/0/1685852893031?e=2147483647&v=beta&t=7APT5IiDC1JfarCVI2f3ArMuhtM1XLBp8Mobhwpk_wQ' // Ruta de la imagen para la segunda entrada
    },
    // Agrega más entradas aquí
];

export default function BackgroundBeamsDemo() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Navbar />
            <section className="bg-neutral-950 py-16">
                <h1 className="text-3xl text-text mb-8 text-center">Blog Page</h1>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index}>
                            <div className="border rounded-lg overflow-hidden">
                                <motion.div 
                                    className="p-6 transform transition duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                                    onClick={() => handleToggle(index)}
                                    initial={{ y: 0 }}
                                    animate={{ y: expandedIndex === index ? -5 : 0 }}
                                >
                                    <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-500">{post.date}</p>
                                </motion.div>
                                {expandedIndex === index && (
                                    <motion.div
                                        className="bg-neutral-950 p-4 shadow-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <p>{post.content}</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}
