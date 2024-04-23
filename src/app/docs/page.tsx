"use client"

import React, { useRef } from 'react';
import NavbarComponent from '@/components/Navbar';
import Footer from '@/components/Footer';
import Document from '@/docss/components/main';
import { Link } from 'react-scroll';
 

function DocsPage() {
  const navbarRef = useRef(null);

  return (
    <div className="bg-black text-white">
      <NavbarComponent />
    <Document/>
      <Footer />
    </div>
  );
}

export default DocsPage;
