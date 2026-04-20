import React, { useState, useEffect } from "react";

export default function Appointment() {
    // Definisi 3 foto untuk carousel (Ganti URL dengan foto sebenar)
    const slides = [
        {
            id: 1,
            content: (
                <div className="w-full h-full bg-blue-100 flex items-end justify-center border-4 border-white shadow-xl relative z-10">
                    <span className="text-blue-400 mb-10 text-sm font-semibold">
                        📷 Foto Dokter 1
                    </span>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="w-full h-full bg-pink-100 flex items-end justify-center border-4 border-white shadow-xl relative z-10">
                    <span className="text-pink-400 mb-10 text-sm font-semibold">
                        📷 Foto Dokter 2
                    </span>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="w-full h-full bg-yellow-100 flex items-end justify-center border-4 border-white shadow-xl relative z-10">
                    <span className="text-yellow-400 mb-10 text-sm font-semibold">
                        📷 Foto Dokter 3
                    </span>
                </div>
            ),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Logika untuk automatic slide (berubah setiap 5 detik)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // 5000ms = 5 detik

        // Bersihkan interval apabila komponen unmount
        return () => clearInterval(interval);
    }, [slides.length]);

    // Fungsi untuk navigasi manual
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                {/* BAHAGIAN KIRI: Carousel Utama & Elemen Terapung */}
                <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[500px]">
                    {/* Latar Belakang Bulatan (Arcs) - TETAP */}
                    <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border-[15px] border-pink-50/50 -z-10"></div>
                    <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-pink-50/30 -z-10"></div>

                    {/* --- AREA CAROUSEL --- */}
                    <div className="w-[280px] h-[400px] rounded-b-full rounded-t-[100px] overflow-hidden relative z-10">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                            >
                                {slide.content}
                            </div>
                        ))}
                    </div>
                    {/* --- AKHIR AREA CAROUSEL --- */}

                    {/* Ikon Sosial Terapung (Kiri Atas) - TETAP */}
                    <div className="absolute top-10 left-0 md:left-10 flex flex-col gap-3 z-20">
                        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-blue-500 text-xs font-bold cursor-pointer hover:scale-110 transition-transform">
                            in
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-pink-500 text-xs font-bold ml-6 cursor-pointer hover:scale-110 transition-transform">
                            IG
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 text-xs font-bold ml-10 cursor-pointer hover:scale-110 transition-transform">
                            f
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-black text-xs font-bold ml-4 mt-2 cursor-pointer hover:scale-110 transition-transform">
                            X
                        </div>
                    </div>

                    {/* Kad Terapung 1: Servis (Kiri Bawah) - TETAP */}
                    <div className="absolute bottom-24 -left-4 md:left-0 bg-white p-4 rounded-xl shadow-[0_10px_30px_rgb(0,0,0,0.08)] border border-gray-50 flex flex-col gap-3 z-20">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-3 bg-[#ff6b8b] rounded-full"></div>
                            <span className="text-sm font-bold text-[#282560]">
                                Teeth Whitening
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-3 bg-[#ff6b8b] rounded-full"></div>
                            <span className="text-sm font-bold text-[#282560]">
                                Root Canal
                            </span>
                        </div>
                    </div>

                    {/* Kad Terapung 2: Profil (Kanan Bawah) - TETAP */}
                    <div className="absolute bottom-16 -right-4 md:-right-6 bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgb(0,0,0,0.08)] border border-gray-50 max-w-[220px] z-20">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-lg">
                                👩‍⚕️
                            </div>
                            <div>
                                <p className="font-bold text-[#282560] text-xs">
                                    Dr. Natali jackson
                                </p>
                                <p className="text-[#ff6b8b] text-[10px] font-semibold">
                                    Dental Experts
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-[10px] leading-relaxed">
                            "It is a long established fact that a reader will be
                            distracted by the readable content"
                        </p>
                    </div>

                    {/* Navigasi / Pagination Slider (Tengah Bawah) - Diperbarui untuk Carousel */}
                    <div className="absolute -bottom-6 bg-[#fff5f7] px-6 py-2.5 rounded-full flex items-center gap-5 shadow-sm border border-pink-50 z-20">
                        <button
                            onClick={prevSlide}
                            className="text-[#282560] font-black hover:text-[#ff6b8b] transition-colors"
                        >
                            ←
                        </button>
                        <span className="text-sm font-bold text-[#282560]">{`0${currentIndex + 1}`}</span>
                        <div className="w-20 h-1 bg-pink-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#ff6b8b] transition-all duration-300"
                                style={{
                                    width: `${((currentIndex + 1) / slides.length) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <span className="text-sm font-bold text-[#282560]">{`0${slides.length}`}</span>
                        <button
                            onClick={nextSlide}
                            className="text-[#282560] font-black hover:text-[#ff6b8b] transition-colors"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* BAHAGIAN KANAN: Teks & Grid Kad Doktor (TETAP SAMA SEPERTI SEBELUMNYA) */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] mb-4">
                            Highly Qualified Team
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Kad 1 (Gelap) */}
                        <div className="bg-[#282560] rounded-3xl p-6 shadow-lg flex flex-col justify-between border border-[#3b387a] hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-inner">
                                    👩‍⚕️
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-0.5">
                                        Nashid Martines
                                    </h4>
                                    <p className="text-gray-300 text-[11px]">
                                        Cardiac Surgery
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-between px-2 text-white text-xs font-bold">
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    in
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    IG
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    f
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    X
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    ▶
                                </span>
                            </div>
                        </div>

                        {/* Kad 2 (Cerah) */}
                        <div className="bg-[#fff5f7] rounded-3xl p-6 shadow-sm flex flex-col justify-between border border-pink-100 hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white border border-pink-50 flex items-center justify-center text-2xl shadow-sm">
                                    👨‍⚕️
                                </div>
                                <div>
                                    <h4 className="text-[#282560] font-bold text-sm mb-0.5">
                                        Nashid Martines
                                    </h4>
                                    <p className="text-[#ff6b8b] text-[11px] font-semibold">
                                        Cardiac Surgery
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-pink-100 pt-4 flex justify-between px-2 text-[#282560] text-xs font-bold">
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    in
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    IG
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    f
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    X
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    ▶
                                </span>
                            </div>
                        </div>

                        {/* Kad 3 (Cerah) */}
                        <div className="bg-[#fff5f7] rounded-3xl p-6 shadow-sm flex flex-col justify-between border border-pink-100 hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white border border-pink-50 flex items-center justify-center text-2xl shadow-sm">
                                    👩‍⚕️
                                </div>
                                <div>
                                    <h4 className="text-[#282560] font-bold text-sm mb-0.5">
                                        Nashid Martines
                                    </h4>
                                    <p className="text-[#ff6b8b] text-[11px] font-semibold">
                                        Cardiac Surgery
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-pink-100 pt-4 flex justify-between px-2 text-[#282560] text-xs font-bold">
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    in
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    IG
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    f
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    X
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    ▶
                                </span>
                            </div>
                        </div>

                        {/* Kad 4 (Gelap) */}
                        <div className="bg-[#282560] rounded-3xl p-6 shadow-lg flex flex-col justify-between border border-[#3b387a] hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-inner">
                                    👩‍⚕️
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm mb-0.5">
                                        Nashid Martines
                                    </h4>
                                    <p className="text-gray-300 text-[11px]">
                                        Cardiac Surgery
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-4 flex justify-between px-2 text-white text-xs font-bold">
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    in
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    IG
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    f
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    X
                                </span>
                                <span className="hover:text-[#ff6b8b] transition-colors">
                                    ▶
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
