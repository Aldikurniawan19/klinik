import React from "react";

export default function ContactUs() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto font-sans">
            <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
                {/* --- BAGIAN KIRI: Area Peta & Kartu Informasi --- */}
                <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden bg-blue-50 border border-gray-100 shadow-sm min-h-[500px]">
                    {/* Placeholder Peta (Nantinya bisa diganti dengan tag <iframe> Google Maps) */}
                    <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-bold text-center px-4">
                        <div className="bg-white/50 p-4 rounded-xl border border-white">
                            🗺️ Area Iframe Google Maps
                        </div>
                    </div>

                    {/* Tombol Open in Maps */}
                    <div className="absolute top-6 left-6 bg-white px-4 py-2.5 rounded-xl shadow-md text-blue-600 text-xs font-bold flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors z-10">
                        Open in Maps{" "}
                        <span className="text-lg leading-none">↗</span>
                    </div>

                    {/* Floating Card Informasi */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col sm:flex-row items-center gap-6 justify-between z-10">
                        {/* Jam Kerja (Working Hours) */}
                        <div className="flex items-center gap-4 w-full sm:w-1/2">
                            <div className="w-12 h-12 rounded-full bg-[#ff6b8b] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                                🕒
                            </div>
                            <div>
                                <h4 className="font-bold text-[#282560] text-sm mb-1">
                                    Working Hours:
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    Mon-Thu: 8:00am-5:00pm
                                </p>
                                <p className="text-gray-500 text-xs">
                                    Fri: 8:00am-1:00pm
                                </p>
                            </div>
                        </div>

                        {/* Garis Pemisah (Hanya Muncul di Desktop) */}
                        <div className="hidden sm:block w-px h-12 bg-gray-200 shrink-0"></div>

                        {/* Alamat Kantor (Office Address) */}
                        <div className="flex items-center gap-4 w-full sm:w-1/2">
                            <div className="w-12 h-12 rounded-full bg-[#282560] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                                ✉️
                            </div>
                            <div>
                                <h4 className="font-bold text-[#282560] text-sm mb-1">
                                    Office Address:
                                </h4>
                                <p className="text-gray-500 text-xs leading-relaxed">
                                    764 15768 Delmer Shoals,
                                    <br />
                                    Eliasport, FL 04331-6195
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BAGIAN KANAN: Formulir Kontak --- */}
                <div className="w-full lg:w-1/2 bg-[#282560] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-xl">
                    {/* Background Pattern Aksen (Simulasi Garis DNA) */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                        <div className="w-[150%] h-[150%] border-[2px] border-white/40 rounded-full transform -rotate-45 translate-x-20"></div>
                        <div className="absolute w-[100%] h-[100%] border-[2px] border-white/40 rounded-full transform -rotate-45 translate-x-10 translate-y-20"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 leading-tight">
                            Get In Touch <br /> With Us
                        </h2>

                        <form className="flex flex-col gap-10">
                            {/* Baris 1: Nama */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/80 pb-3 focus:outline-none focus:border-white transition-colors text-sm"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/80 pb-3 focus:outline-none focus:border-white transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            {/* Baris 2: Kontak */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/80 pb-3 focus:outline-none focus:border-white transition-colors text-sm"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/80 pb-3 focus:outline-none focus:border-white transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            {/* Baris 3: Pesan */}
                            <div className="relative mt-2">
                                <input
                                    type="text"
                                    placeholder="Message"
                                    className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/80 pb-8 focus:outline-none focus:border-white transition-colors text-sm"
                                />
                            </div>

                            {/* Tombol Submit */}
                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="bg-white text-[#282560] pr-2 pl-6 py-2 rounded-[1.25rem] font-bold flex items-center gap-6 w-max hover:bg-gray-100 transition-colors shadow-lg group"
                                >
                                    <span className="text-sm">Appointment</span>
                                    <div className="w-10 h-10 bg-[#282560] rounded-xl flex items-center justify-center text-white group-hover:bg-[#383375] transition-colors">
                                        →
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
