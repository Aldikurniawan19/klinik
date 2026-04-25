import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Wrapper fixed full-width */}
            <div className="fixed top-0 left-0 w-full z-50">
                {/* Top Bar — selalu putih, hilang saat scroll */}
                <div
                    className={`bg-white transition-all duration-300 overflow-hidden ${
                        scrolled
                            ? "max-h-0 opacity-0 py-0"
                            : "max-h-10 opacity-100"
                    }`}
                >
                    <div className="flex items-center justify-between px-8 py-1.5 text-sm text-gray-600 border-b border-gray-100">
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-1.5">
                                <span className="text-pink-500">📞</span>{" "}
                                +11234567890
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="text-purple-400">✉️</span>{" "}
                                info@example.com
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 text-xs font-semibold">
                            <a
                                href="#"
                                className="hover:text-[#2d2b6b] transition-colors"
                            >
                                in
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#2d2b6b] transition-colors"
                            >
                                ig
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#2d2b6b] transition-colors"
                            >
                                f
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#2d2b6b] transition-colors"
                            >
                                𝕏
                            </a>
                            <a
                                href="#"
                                className="hover:text-[#2d2b6b] transition-colors"
                            >
                                ▶
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navbar Utama */}
                {scrolled ? (
                    /* === SCROLLED: full-width dark navbar === */
                    <nav className="bg-[#2d2b6b] text-white shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between px-16 py-3">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                >
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="17"
                                        stroke="#e879a0"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M18 8 C12 8, 8 12, 8 18 C8 24, 12 28, 18 28"
                                        stroke="#e879a0"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M18 8 C24 8, 28 12, 28 18 C28 24, 24 28, 18 28"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="3"
                                        fill="#e879a0"
                                    />
                                </svg>
                                <span className="font-bold text-xl leading-tight text-white">
                                    Clinic
                                    <br />
                                    <span className="text-[#e879a0] text-sm font-semibold">
                                        Master
                                    </span>
                                </span>
                            </div>

                            {/* Menu */}
                            <ul className="hidden md:flex items-center gap-8 font-medium text-white/90">
                                <li>
                                    <Link
                                        href="/"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Home +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Pages +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Team +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Services +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Blogs +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>

                            {/* Tombol */}
                            <button className="bg-[#e879a0] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#d4607f] transition-all shadow-md">
                                Appointment
                            </button>
                        </div>
                    </nav>
                ) : (
                    /* === TOP: background putih, pill dark di tengah === */
                    <div className="bg-white px-8 py-3 transition-all duration-300">
                        <div className="bg-[#2d2b6b] rounded-xl mx-8 px-8 py-3 flex items-center justify-between shadow-lg">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                >
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="17"
                                        stroke="#e879a0"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M18 8 C12 8, 8 12, 8 18 C8 24, 12 28, 18 28"
                                        stroke="#e879a0"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M18 8 C24 8, 28 12, 28 18 C28 24, 24 28, 18 28"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="3"
                                        fill="#e879a0"
                                    />
                                </svg>
                                <span className="font-bold text-xl leading-tight text-white">
                                    Clinic
                                    <br />
                                    <span className="text-[#e879a0] text-sm font-semibold">
                                        Master
                                    </span>
                                </span>
                            </div>

                            {/* Menu */}
                            <ul className="hidden md:flex items-center gap-8 font-medium text-white/90">
                                <li>
                                    <Link
                                        href="/"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Home +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Pages +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Team +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Services +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Blogs +
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-[#e879a0] transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>

                            {/* Tombol */}
                            <button className="bg-[#e879a0] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#d4607f] transition-all shadow-md">
                                Appointment
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Spacer agar konten tidak tertutup navbar */}
            <div className="h-[108px]" />
        </>
    );
}
