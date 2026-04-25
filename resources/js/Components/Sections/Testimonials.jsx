import React, { useRef, useEffect } from "react";

export default function Testimonials() {
    const sliderRef = useRef(null);

    // Fungsi untuk auto-slide karosel
    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    sliderRef.current;

                // Jika sudah mencapai ujung kanan (dengan toleransi 10px)
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    // Kembali ke awal
                    sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    // Geser ke kanan selebar satu kartu (estimasi 400px + gap 24px)
                    sliderRef.current.scrollBy({
                        left: 424,
                        behavior: "smooth",
                    });
                }
            }
        }, 4000); // Bergeser otomatis setiap 4 detik

        return () => clearInterval(interval);
    }, []);

    // Data Testimoni (Kombinasi Video & Review)
    const testimonials = [
        { type: "video", id: 1, imageText: "📷 Video Pasien 1" },
        {
            type: "review",
            id: 2,
            title: "Best Treatment",
            author: "Kenneth Fong",
            role: "Postgraduate Student",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
        },
        { type: "video", id: 3, imageText: "📷 Video Pasien 2" },
        {
            type: "review",
            id: 4,
            title: "Best Treatment",
            author: "Sarah Jenkins",
            role: "Teacher",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
        },
        { type: "video", id: 5, imageText: "📷 Video Pasien 3" },
        {
            type: "review",
            id: 6,
            title: "Highly Recommended",
            author: "Michael Wong",
            role: "Engineer",
            text: "Great service, highly recommended! Professional staff and very clean environment. It is a long established fact that a reader will be distracted by the readable content.",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
            {/* --- HEADER SEKSYEN --- */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] leading-tight">
                    What Our Patient <br /> Say About Us
                </h2>

                <div className="flex flex-col items-end gap-3">
                    {/* Baris Atas: Avatar & Tombol */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-xs">
                                👩
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs">
                                👨
                            </div>
                            <div className="w-10 h-10 rounded-full bg-yellow-200 border-2 border-white flex items-center justify-center text-xs">
                                👱
                            </div>
                            <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-xs">
                                👨‍🦱
                            </div>
                        </div>
                        <div className="bg-[#fff5f7] text-[#282560] font-bold text-sm px-6 py-3 rounded-full">
                            Talk to over 215 doctor
                        </div>
                        <button className="w-12 h-12 bg-[#fff5f7] text-[#ff6b8b] rounded-full flex items-center justify-center font-bold hover:bg-[#ffe6eb] transition-colors">
                            ↗
                        </button>
                    </div>
                    {/* Baris Bawah: Rating */}
                    <div className="flex items-center gap-2 pr-2">
                        <div className="flex text-yellow-400 text-sm tracking-widest">
                            ★★★★★
                        </div>
                        <span className="font-extrabold text-[#282560] text-sm">
                            (4.8)
                        </span>
                        <span className="text-gray-500 text-sm">
                            12k+ ratings on google
                        </span>
                    </div>
                </div>
            </div>

            {/* --- TRACK KAROSEL --- */}
            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto pb-10 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {testimonials.map((item) =>
                    item.type === "video" ? (
                        /* Kartu Tipe 1: Video */
                        <div
                            key={item.id}
                            className="relative w-[320px] md:w-[380px] lg:w-[400px] h-[450px] shrink-0 bg-gray-200 rounded-3xl overflow-hidden border border-gray-100 shadow-sm group"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium z-0 transition-transform duration-500 group-hover:scale-110">
                                {item.imageText}
                            </div>
                            {/* Overlay Tombol Bawah */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white p-3 pr-6 rounded-2xl flex items-center justify-between shadow-lg z-10 hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b8b] flex items-center justify-center text-white pl-1 shadow-md">
                                        ▶
                                    </div>
                                    <span className="font-bold text-[#282560]">
                                        Watch The Video
                                    </span>
                                </div>
                                <span className="text-[#282560] font-bold">
                                    ›
                                </span>
                            </div>
                        </div>
                    ) : (
                        /* Kartu Tipe 2: Review (Testimoni) */
                        <div
                            key={item.id}
                            className="w-[320px] md:w-[380px] lg:w-[400px] h-[450px] shrink-0 bg-white border-2 border-pink-50 rounded-3xl p-8 flex flex-col justify-between shadow-[0_10px_30px_rgb(0,0,0,0.02)] hover:border-pink-200 transition-colors"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex text-yellow-400 text-lg">
                                        ★★★★★
                                    </div>
                                    <span className="font-bold text-[#282560]">
                                        {item.title}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm leading-loose">
                                    {item.text}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center text-lg border-2 border-white shadow-sm">
                                        👨‍🦰
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#282560] text-sm mb-0.5">
                                            {item.author}
                                        </p>
                                        <p className="text-gray-400 text-[11px]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                {/* Ikon Quote Outline (Warna Pink) */}
                                <svg
                                    width="46"
                                    height="46"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ff6b8b"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-70"
                                >
                                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1c0 1 0 1 0 2v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                </svg>
                            </div>
                        </div>
                    ),
                )}
            </div>

            {/* --- PAGINATION (INDIKATOR BAWAH) --- */}
            <div className="flex items-center gap-4 mt-4">
                <span className="text-sm font-bold text-[#282560]">02</span>
                <div className="w-32 h-1 bg-pink-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-[#ff6b8b]"></div>
                </div>
                <span className="text-sm font-bold text-[#282560]">03</span>
            </div>
        </section>
    );
}
