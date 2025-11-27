"use client";
import NavBar from "@/statics/Navbar";
import Footer from "@/statics/Footer";

export default function ClientWrapper({ children }) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}
