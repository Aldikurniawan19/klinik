import React, { useState } from "react";

export default function PricingPlans() {
    // State untuk mengontrol apakah mode Tahunan (Yearly) aktif atau tidak
    const [isYearly, setIsYearly] = useState(false);

    // Data untuk kartu harga
    const plans = [
        {
            badge: "PROFESSIONAL",
            monthlyPrice: 49,
            yearlyPrice: 499, // Harga simulasi untuk tahunan
            title: "Maintenance Package",
            features: [
                "Dental cleaning",
                "Polishing",
                "Filling",
                "Gum care",
                "Flossing",
            ],
            imagePlaceholder: "📷 Dokter 1",
        },
        {
            badge: "FAMILY PACK",
            monthlyPrice: 99,
            yearlyPrice: 999, // Harga simulasi untuk tahunan
            title: "Cosmetic Surgeriess",
            features: [
                "Root canal treatment",
                "Braces",
                "Implants",
                "Bridges",
                "Crown",
            ],
            imagePlaceholder: "📷 Dokter 2",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans text-center">
            {/* --- HEADER & TOGGLE --- */}
            <div className="max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] mb-6">
                    Flexible Pricing Plans
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-10">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                </p>

                {/* Tombol Toggle Bulanan/Tahunan */}
                <div className="inline-flex bg-[#ff6b8b] rounded-full p-1 border-2 border-[#ff6b8b] shadow-md">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                            !isYearly
                                ? "bg-white text-[#282560] shadow-sm"
                                : "text-white hover:bg-white/20"
                        }`}
                    >
                        MONTHLY
                    </button>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                            isYearly
                                ? "bg-white text-[#282560] shadow-sm"
                                : "text-white hover:bg-white/20"
                        }`}
                    >
                        YEARLY
                    </button>
                </div>
            </div>

            {/* --- GRID KARTU HARGA --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#fffdfd] rounded-3xl relative flex flex-col sm:flex-row items-stretch border border-pink-50 shadow-[0_15px_40px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-shadow duration-300 min-h-[380px]"
                    >
                        {/* Label Badge Vertikal (Kiri) */}
                        <div
                            className="absolute left-0 top-10 bg-[#ff6b8b] text-white py-6 px-1.5 rounded-r-xl text-[11px] font-black tracking-widest z-20 shadow-md"
                            style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                            }}
                        >
                            {plan.badge}
                        </div>

                        {/* Area Gambar Dokter (Kiri) */}
                        <div className="w-full sm:w-2/5 relative flex items-end justify-center bg-[#fff5f7]/50 pt-16 sm:pt-0">
                            {/* Placeholder Gambar - Nanti diganti tag <img src="..." className="absolute bottom-0 h-auto w-full object-cover" /> */}
                            <div className="w-[160px] h-[280px] bg-gray-200 rounded-t-3xl flex items-center justify-center text-gray-400 text-xs text-center border-4 border-white shadow-inner z-10">
                                {plan.imagePlaceholder} <br /> (Transparan)
                            </div>
                        </div>

                        {/* Konten Harga & Fitur (Kanan) */}
                        <div className="w-full sm:w-3/5 p-8 text-left flex flex-col justify-center z-20 bg-white/50 backdrop-blur-sm">
                            {/* Harga Dinamis berdasarkan State 'isYearly' */}
                            <h3 className="text-5xl font-black text-[#282560] flex items-baseline gap-1 mb-2 transition-all duration-300">
                                $
                                {isYearly
                                    ? plan.yearlyPrice
                                    : plan.monthlyPrice}
                                <span className="text-sm font-medium text-gray-400 tracking-normal">
                                    / {isYearly ? "Yearly" : "Monthly"}
                                </span>
                            </h3>

                            <h4 className="font-bold text-[#282560] text-lg mb-4">
                                {plan.title}
                            </h4>

                            {/* Garis Pemisah Putus-putus */}
                            <div className="border-t border-dashed border-gray-200 w-full mb-6"></div>

                            {/* Daftar Fitur */}
                            <ul className="flex flex-col gap-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 text-sm text-[#282560] font-medium"
                                    >
                                        <span className="text-[#ff6b8b] font-black text-xs">
                                            ✓
                                        </span>{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tombol Aksi */}
                            <button className="mt-auto bg-[#282560] text-white py-3.5 rounded-xl font-bold hover:bg-[#383375] transition-colors w-full shadow-lg">
                                Choose Plans
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
