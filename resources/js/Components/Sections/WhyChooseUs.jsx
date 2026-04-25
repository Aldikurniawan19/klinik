import React, { useState } from "react";

export default function WhyChooseUs() {
    // State untuk melacak item akordion mana yang sedang terbuka (default: 0 / pertama)
    const [activeIndex, setActiveIndex] = useState(0);

    // Data untuk akordion
    const reasons = [
        {
            id: "01",
            title: "Expertise in Dental Industry",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.",
        },
        {
            id: "02",
            title: "Patient-Centered Care",
            text: "We prioritize our patients comfort and well-being, providing personalized treatment plans tailored to your specific dental needs and goals.",
        },
        {
            id: "03",
            title: "Flexible Appointment Scheduling",
            text: "We understand your busy lifestyle, which is why we offer flexible scheduling options including evening and weekend appointments.",
        },
    ];

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* --- BAGIAN KIRI: Teks & Akordion --- */}
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] mb-4">
                            Why Choose Dental Care
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </p>
                    </div>

                    {/* Akordion List */}
                    <div className="flex flex-col gap-4">
                        {reasons.map((reason, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={reason.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden ${
                                        isActive
                                            ? "bg-white border border-[#ff6b8b] p-6 shadow-sm"
                                            : "bg-[#282560] p-5 hover:bg-[#383375]"
                                    }`}
                                >
                                    {isActive ? (
                                        // Tampilan Saat Aktif (Terbuka)
                                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-[#282560] mb-3">
                                                    {reason.title}
                                                </h4>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {reason.text}
                                                </p>
                                            </div>
                                            {/* Gambar Thumbnail di dalam Akordion */}
                                            <div className="w-full sm:w-[140px] h-[100px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-xs shrink-0 relative overflow-hidden">
                                                📷 Gambar
                                                <br />
                                                Pemeriksaan
                                            </div>
                                        </div>
                                    ) : (
                                        // Tampilan Saat Tidak Aktif (Tertutup)
                                        <div className="flex justify-between items-center px-2">
                                            <h4 className="text-white font-semibold text-lg">
                                                {reason.title}
                                            </h4>
                                            <span className="text-4xl font-black text-white/10">
                                                {reason.id}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- BAGIAN KANAN: Kolase Gambar --- */}
                <div className="relative w-full h-[500px] flex items-center justify-center mt-10 lg:mt-0">
                    {/* Lingkaran Putus-putus (Background) */}
                    <div className="absolute w-[80%] h-[80%] border border-dashed border-gray-300 rounded-full animate-[spin_60s_linear_infinite]"></div>

                    {/* Aksen Titik-titik (Dots) */}
                    <div className="absolute top-[10%] right-[20%] w-2 h-2 bg-[#282560] rounded-full"></div>
                    <div className="absolute bottom-[10%] left-[30%] w-2 h-2 bg-[#282560] rounded-full"></div>
                    <div className="absolute top-[50%] right-0 w-2 h-2 bg-[#ff6b8b] rounded-full"></div>

                    {/* Gambar 1: Dokter Senior (Kanan Atas) */}
                    <div className="absolute top-4 right-10 w-[220px] h-[240px] bg-gray-200 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden z-10">
                        <span className="text-xs text-gray-400">
                            📷 Dokter Senior
                        </span>
                    </div>

                    {/* Gambar 2: Pasien Wanita Tersenyum (Kiri Tengah) */}
                    <div className="absolute top-28 left-4 w-[160px] h-[120px] bg-gray-300 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden z-20">
                        <span className="text-xs text-gray-500">📷 Pasien</span>
                    </div>

                    {/* Gambar 3: Perawatan Gigi/Kawat Gigi (Bawah Kiri) */}
                    <div className="absolute bottom-8 left-10 w-[240px] h-[160px] bg-gray-200 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden z-10">
                        <span className="text-xs text-gray-400">
                            📷 Kawat Gigi
                        </span>
                    </div>

                    {/* Gambar 4: Implan Gigi (Bawah Kanan) */}
                    <div className="absolute bottom-20 right-16 w-[130px] h-[130px] bg-gray-300 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center overflow-hidden z-20">
                        <span className="text-xs text-gray-500">
                            📷 Implan 3D
                        </span>
                    </div>

                    {/* Gambar 5: Model Gigi 3D (Kiri Atas, Melayang) */}
                    <div className="absolute top-10 left-16 w-[80px] h-[80px] bg-transparent flex items-center justify-center z-30 drop-shadow-xl">
                        <span className="text-4xl">🦷</span>
                    </div>

                    {/* Floating Badge: 150k Patient Recovers */}
                    <div className="absolute top-[45%] right-0 bg-white px-4 py-2.5 rounded-full shadow-xl flex items-center gap-3 border border-gray-50 z-30 transform translate-x-1/4">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-[10px]">
                                👩
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-[10px]">
                                👨
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white flex items-center justify-center text-[10px]">
                                👱
                            </div>
                        </div>
                        <div>
                            <p className="text-[#ff6b8b] font-bold text-sm leading-none">
                                150k
                            </p>
                            <p className="text-gray-400 text-[10px] whitespace-nowrap">
                                Patient Recovers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
