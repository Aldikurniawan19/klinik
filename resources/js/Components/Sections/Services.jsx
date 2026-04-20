import React from "react";

export default function Services() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans">
            {/* --- BAGIAN ATAS: Gambar (Kiri), Teks & Video (Tengah), Statistik (Kanan) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-center">
                {/* 1. Kiri: Area Gambar Pasien */}
                <div className="lg:col-span-4 relative flex justify-center">
                    {/* Placeholder Gambar Pasien */}
                    <div className="w-[300px] h-[350px] bg-blue-100 rounded-tl-full rounded-tr-full rounded-br-3xl rounded-bl-3xl overflow-hidden shadow-lg border-4 border-white flex flex-col items-center justify-center text-blue-400">
                        <span>📷 Gambar Pasien</span>
                    </div>

                    {/* Aksesoris: Gigi 3D (Kiri Atas) */}
                    <div className="absolute top-10 -left-6 bg-white p-2 rounded-full shadow-lg w-20 h-20 flex items-center justify-center text-4xl">
                        🦷
                    </div>

                    {/* Aksesoris: Pasien Sembuh (Kiri Bawah) */}
                    <div className="absolute bottom-16 -left-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-3 border border-gray-100">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white text-xs flex items-center justify-center">
                                👩
                            </div>
                            <div className="w-8 h-8 rounded-full bg-blue-200 border-2 border-white text-xs flex items-center justify-center">
                                👨
                            </div>
                            <div className="w-8 h-8 rounded-full bg-yellow-200 border-2 border-white text-xs flex items-center justify-center">
                                👱
                            </div>
                        </div>
                        <div>
                            <p className="text-[#ff6b8b] font-bold text-sm leading-none">
                                150k
                            </p>
                            <p className="text-gray-400 text-[10px]">
                                Patient recovers
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Tengah: Teks Utama & Box Video */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] leading-[1.1]">
                        We Care About <br /> Your Dental Health
                    </h2>

                    <div className="flex items-center gap-3">
                        <div className="flex text-yellow-400 text-lg">
                            ★★★★★
                        </div>
                        <div className="text-sm font-bold text-[#282560]">
                            (4.8)
                        </div>
                        <div className="text-sm text-gray-500">
                            12k+ ratings on google
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-2">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using.
                    </p>

                    {/* Box Video & List Layanan */}
                    <div className="bg-[#383375] rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl text-white">
                        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#ff6b8b] shadow-md pl-1">
                                {/* Ikon Play Sederhana */}▶
                            </div>
                            <span className="font-semibold text-sm">
                                Play Video
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-y-2 text-xs font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#00e0c6] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>{" "}
                                Teeth Whitening
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#00e0c6] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>{" "}
                                Modern Anesthetic
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#00e0c6] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>{" "}
                                Quality Brackets
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full bg-[#00e0c6] flex items-center justify-center text-white text-[10px]">
                                    ✓
                                </div>{" "}
                                Root Canal
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Kanan: Grid Statistik Vertikal */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <div className="bg-[#fff5f7] rounded-2xl py-6 px-4 text-center border border-pink-50 hover:-translate-y-1 transition-transform">
                        <h3 className="text-4xl font-extrabold text-[#282560] mb-1">
                            45k
                        </h3>
                        <p className="text-[#ff6b8b] text-sm font-medium">
                            Happy Patients
                        </p>
                    </div>
                    <div className="bg-[#f0f8ff] rounded-2xl py-6 px-4 text-center border border-blue-50 hover:-translate-y-1 transition-transform">
                        <h3 className="text-4xl font-extrabold text-[#282560] mb-1">
                            200+
                        </h3>
                        <p className="text-[#20c997] text-sm font-medium">
                            Specialists
                        </p>
                    </div>
                    <div className="bg-[#fffaf0] rounded-2xl py-6 px-4 text-center border border-orange-50 hover:-translate-y-1 transition-transform">
                        <h3 className="text-4xl font-extrabold text-[#282560] mb-1">
                            150+
                        </h3>
                        <p className="text-[#ff9f43] text-sm font-medium">
                            Winning Awards
                        </p>
                    </div>
                </div>
            </div>

            {/* --- BAGIAN BAWAH: 3 Kartu Layanan (01, 02, 03) --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                {/* Komponen Kartu yang dapat digunakan berulang */}
                {[
                    { id: "01", title: "Medical Service", icon: "⚕️" },
                    { id: "02", title: "24/7 Medicines", icon: "💊" },
                    { id: "03", title: "Best Doctor", icon: "👩‍⚕️" },
                ].map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white hover:bg-[#282560] transition-all duration-500 rounded-3xl p-8 relative shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between min-h-[260px] cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-xl font-bold text-[#282560] group-hover:text-white transition-colors duration-300">
                                {item.title}
                            </h4>
                            <span className="text-5xl font-black text-gray-100/60 group-hover:text-white/10 transition-colors duration-300">
                                {item.id}
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed mb-6 pr-4 group-hover:text-gray-300 transition-colors duration-300">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                        </p>

                        <a
                            href="#"
                            className="text-[#ff6b8b] group-hover:text-white text-sm font-semibold flex items-center gap-1 transition-colors duration-300"
                        >
                            Read More <span className="text-xs">⊙</span>
                        </a>

                        {/* Ikon Mengambang Kanan Bawah */}
                        <div className="absolute -bottom-5 right-6 w-14 h-14 bg-white group-hover:bg-[#ff6b8b] rounded-xl shadow-lg border border-pink-100 group-hover:border-transparent flex items-center justify-center text-[#ff6b8b] group-hover:text-white text-2xl transition-all duration-500 transform group-hover:rotate-12">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
