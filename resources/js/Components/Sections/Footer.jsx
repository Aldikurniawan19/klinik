import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="bg-[#282560] text-white pt-20 pb-8 px-4 md:px-8 font-sans relative overflow-hidden border-t border-white/10">
            {/* Latar Belakang Pola Heksagon (Simulasi) */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- BAGIAN ATAS: 5 Kolom --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Kolom 1: Profil & Rating */}
                    <div className="lg:col-span-1 pr-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-[#ff6b8b] text-3xl">⚕️</div>
                            <span className="font-extrabold text-2xl leading-tight">
                                Clinic
                                <br />
                                Master
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                            ClinicMaster Ipsum Dolor Sit Amet, Consectetuer
                            Adipiscing Elit, Sed Diam Nonummy Nibh.
                        </p>
                        {/* Kartu Rating Google */}
                        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg inline-flex">
                            <div className="text-2xl font-bold text-blue-500">
                                G
                            </div>
                            <div>
                                <div className="flex text-yellow-400 text-sm">
                                    ★★★★★{" "}
                                    <span className="text-[#282560] font-bold ml-1">
                                        (4.8)
                                    </span>
                                </div>
                                <p className="text-[#282560] text-[10px] font-medium mt-0.5">
                                    12k+ ratings on google
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 2: Our Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Services</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Emergency Care
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Operation Theater
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Medical Checkup
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Diagnostic Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Outdoor Checkup
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Useful Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Useful Links</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Latest News
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Our Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 4: Our Stores */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Stores</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    New York
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    London SF
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Edinburgh
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Los Angeles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Las Vegas
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 5: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/60">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Appointments
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-[#ff6b8b] transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <div className="border-t border-white/10 w-full mb-10"></div>

                {/* --- BAGIAN TENGAH: Newsletter --- */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">
                            Important Updates Waiting for you
                        </h3>
                        <p className="text-white/60 text-sm">
                            Get our latest and best contents right into your
                            inbox
                        </p>
                    </div>

                    {/* Form Input Email */}
                    <div className="w-full lg:w-[500px] bg-white rounded-full p-1.5 flex items-center shadow-lg">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="flex-1 bg-transparent rounded-full px-6 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <button className="bg-[#282560] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#383375] transition-colors shadow-md">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* Garis Pemisah */}
                <div className="border-t border-white/10 w-full mb-8"></div>

                {/* --- BAGIAN BAWAH: Copyright & Media Sosial --- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
                    <p>
                        © 2026{" "}
                        <span className="text-[#ff6b8b] font-medium">
                            DexignZone
                        </span>{" "}
                        Theme. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="hover:text-[#ff6b8b] transition-colors font-bold"
                        >
                            in
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff6b8b] transition-colors font-bold"
                        >
                            IG
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff6b8b] transition-colors font-bold"
                        >
                            f
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff6b8b] transition-colors font-bold"
                        >
                            X
                        </a>
                        <a
                            href="#"
                            className="hover:text-[#ff6b8b] transition-colors font-bold"
                        >
                            ▶
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
