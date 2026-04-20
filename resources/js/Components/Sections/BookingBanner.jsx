import React from "react";

export default function BookingBanner() {
    return (
        <section className="w-full bg-[#282560] relative overflow-hidden flex items-center min-h-[50vh] font-sans mt-20">
            {/* Latar belakang aksen DNA/Gelombang (Simulasi) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <div className="w-[120%] h-[200%] border-[40px] border-white/20 rounded-full blur-3xl transform rotate-45"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Bagian Kiri: Judul & Form */}
                <div className="w-full lg:w-3/5 py-12 md:py-0">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                        Make An{" "}
                        <span className="text-[#ffe000]">Appointment</span>
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Baris 1 */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#ff6b8b] transition-colors text-sm"
                            />
                            <span className="absolute right-4 top-3.5 text-white/50 text-sm">
                                👤
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#ff6b8b] transition-colors text-sm"
                            />
                            <span className="absolute right-4 top-3.5 text-white/50 text-sm">
                                ✉️
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="04/20/2026, 9:07 PM"
                                className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#ff6b8b] transition-colors text-sm"
                            />
                            <span className="absolute right-4 top-3.5 text-white/50 text-sm">
                                📅
                            </span>
                        </div>

                        {/* Baris 2 */}
                        <div className="relative">
                            <select className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white/70 appearance-none focus:outline-none focus:border-[#ff6b8b] transition-colors text-sm">
                                <option className="text-black">
                                    Department
                                </option>
                                <option className="text-black">
                                    Dental Care
                                </option>
                            </select>
                            <span className="absolute right-4 top-3.5 text-white/50 text-sm">
                                ⌄
                            </span>
                        </div>
                        <div className="relative">
                            <select className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white/70 appearance-none focus:outline-none focus:border-[#ff6b8b] transition-colors text-sm">
                                <option className="text-black">
                                    Doctor Name
                                </option>
                                <option className="text-black">
                                    Dr. Nashid
                                </option>
                            </select>
                            <span className="absolute right-4 top-3.5 text-white/50 text-sm">
                                ⌄
                            </span>
                        </div>

                        {/* Tombol Submit */}
                        <button
                            type="button"
                            className="w-full bg-white rounded-xl flex items-center justify-between p-1.5 hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-[#282560] font-bold text-sm px-4">
                                Appointment
                            </span>
                            <div className="w-10 h-10 bg-[#ff6b8b] rounded-lg flex items-center justify-center text-white font-bold">
                                →
                            </div>
                        </button>
                    </form>
                </div>

                {/* Bagian Kanan: Gambar Dokter */}
                <div className="hidden lg:flex w-2/5 justify-end items-end h-[50vh] relative">
                    <div className="absolute bottom-0 w-[450px] h-[550px] bg-white/5 rounded-t-full flex items-end justify-center overflow-hidden">
                        {/* Placeholder untuk gambar 3 dokter transparan */}
                        <span className="text-white/50 mb-20 font-bold text-center px-10">
                            📷 Potongan Gambar
                            <br />3 Dokter (PNG)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
