"use client";
import NavBar from "@/statics/Navbar";

export default function ClientWrapper({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
