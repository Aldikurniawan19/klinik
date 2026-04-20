import React from "react";

export default function QualityServices() {
    // Menghapus properti 'active' karena sekarang kita menggunakan hover CSS murni
    const servicesData = [
        { title: "Dental Implants", icon: "🦷" },
        { title: "Orthodontics", icon: "😁" },
        { title: "Pediatric Dentistry", icon: "🧒" },
        { title: "Root Canals", icon: "⚕️" },
    ];

    return (
        <section className="min-h-screen w-full bg-[#fcfcfc] py-20 px-4 md:px-8 font-sans flex flex-col justify-center relative">
            {/* Background Pattern Heksagon (Simulasi) */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(#e5e7eb 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                {/* --- HEADER SEKSYEN --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] leading-tight mb-4">
                            The Best Quality Service <br /> You Can Get
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Simple, transparent pricing that grows with you. Try
                            and plan free for 30 days.
                        </p>
                    </div>

                    {/* Banner Video Kanan */}
                    <div className="w-full lg:w-[400px] h-28 bg-[#383375] rounded-3xl relative overflow-hidden flex items-center px-6 shadow-xl cursor-pointer hover:opacity-90 transition-opacity">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-pink-900/40"></div>
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#ff6b8b] pl-1 shadow-md">
                                ▶
                            </div>
                            <span className="text-white font-bold text-sm">
                                Play Video
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- GRID KARTU (4 KOLOM) DENGAN EFEK HOVER --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            // Menggunakan 'group' untuk mengontrol elemen anak saat induk di-hover
                            className="group relative rounded-3xl overflow-hidden flex flex-col shadow-[0_15px_40px_rgb(0,0,0,0.04)] bg-white border border-gray-100 hover:bg-[#282560] hover:border-[#3b387a] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            {/* Kotak Ikon Mengambang di Kanan Atas */}
                            <div className="absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm z-20 bg-pink-50 text-[#ff6b8b] group-hover:bg-[#ff6b8b] group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Konten Teks */}
                            <div className="p-8 pb-6">
                                <h4 className="text-lg font-bold mb-4 pr-10 text-[#282560] group-hover:text-white transition-colors duration-300">
                                    {service.title}
                                </h4>
                                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page.
                                </p>
                            </div>

                            {/* Gambar */}
                            <div className="h-40 w-full bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center px-4 transition-transform duration-500 group-hover:scale-110">
                                    📷 Gambar <br /> {service.title}
                                </div>
                            </div>

                            {/* Tombol Bawah */}
                            <div className="p-5 text-center">
                                <span className="text-sm font-bold flex items-center justify-center gap-1 text-[#ff6b8b] group-hover:text-white transition-colors duration-300">
                                    View All Details <span>⊙</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- FOOTER SEKSYEN --- */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-200/60 pt-8">
                    <p className="text-[#282560] font-bold mb-4 md:mb-0">
                        We help you live your life in full motion.
                    </p>
                    <button className="bg-[#282560] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#383375] transition-colors shadow-lg">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
