import React from "react";

export default function AboutDoctor() {
    const skills = [
        "Root Canal Therapy",
        "Dental Examinations",
        "Endodontic Surgery",
        "X-Rays and Imaging",
        "Cracked Tooth Treatment",
        "Oral Cancer Screenings",
    ];

    return (
        <section className="py-20 px-4 md:px-8 w-full bg-[#fffcfd] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                {/* --- BAGIAN KIRI: Teks & Informasi Keahlian --- */}
                <div className="w-full lg:w-1/2">
                    {/* Badge */}
                    <span className="inline-block bg-[#ffeef2] text-[#ff6b8b] px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                        Best Dentist
                    </span>

                    {/* Judul */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#282560] mb-6">
                        About Dr. Nashid Martines
                    </h2>

                    {/* Deskripsi */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                        <strong className="text-[#282560]">
                            Dr. Nashid Martines
                        </strong>{" "}
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                    </p>

                    {/* Keahlian (Skills) */}
                    <div className="mb-8">
                        <h3 className="text-[#ff6b8b] font-bold text-lg mb-4">
                            About Skills
                        </h3>
                        {/* Garis Putus-putus */}
                        <div className="border-t border-dashed border-gray-300 mb-6"></div>

                        {/* Grid Keahlian */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span className="text-[#ff6b8b] text-sm font-bold">
                                        ✓
                                    </span>
                                    <span className="text-[#282560] text-sm font-semibold">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tanda Tangan & Tombol */}
                    <div className="flex flex-wrap items-center gap-10 mt-10">
                        {/* Tanda Tangan (Placeholder menggunakan Font Italic) */}
                        <div className="flex flex-col items-center">
                            <div className="font-serif italic text-4xl text-gray-800 -rotate-3 mb-1">
                                Richard Nifon
                            </div>
                            <span className="text-xs text-gray-500 font-medium tracking-wide">
                                Dr. Nashid Martines
                            </span>
                        </div>

                        {/* Tombol Appointment */}
                        <button className="bg-[#ff6b8b] text-white px-2 py-2 pr-6 rounded-full font-bold hover:bg-[#e05a78] transition-colors shadow-lg flex items-center gap-4">
                            <span className="pl-6">Appointment</span>
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#ff6b8b]">
                                →
                            </div>
                        </button>
                    </div>
                </div>

                {/* --- BAGIAN KANAN: Gambar Dokter & Kartu Melayang --- */}
                <div className="w-full lg:w-1/2 relative flex justify-center mt-16 lg:mt-0">
                    {/* Latar Belakang Pink (Kotak Rounded) */}
                    <div className="absolute bottom-0 w-[85%] h-[80%] bg-[#f65a8a] rounded-[2.5rem] -z-10 translate-x-4"></div>

                    {/* Placeholder Gambar Dokter */}
                    <div className="w-[320px] h-[450px] bg-gray-100 flex items-end justify-center z-10 border-b-0 overflow-hidden relative">
                        {/* Ganti div ini dengan tag <img> nantinya */}
                        <span className="mb-24 text-gray-400 font-bold text-center px-4">
                            📷 Gambar Dokter <br /> (Background Transparan)
                        </span>
                    </div>

                    {/* Kartu Melayang 1: Sertifikasi WHO (Kiri) */}
                    <div className="absolute top-1/4 -left-4 md:-left-12 bg-white p-5 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] flex items-center gap-4 z-20 border border-gray-50">
                        {/* Logo Hexagon Palsu */}
                        <div className="w-14 h-14 border border-gray-200 rounded-lg flex flex-col items-center justify-center p-1 bg-gray-50">
                            <span className="font-black text-[#282560] text-sm">
                                WHO
                            </span>
                            <div className="flex gap-0.5 text-[6px]">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        <div>
                            <p className="text-[#282560] font-bold text-sm mb-1">
                                ClinicMaster 2025
                            </p>
                            <p className="text-[#282560] text-[10px] leading-tight mb-2">
                                Quality and <br /> Accreditation Institute
                            </p>
                            <p className="text-[#ff6b8b] text-[10px] font-bold">
                                Best Dermatologists
                            </p>
                        </div>
                    </div>

                    {/* Kartu Melayang 2: Pengalaman (Kanan Bawah) */}
                    <div className="absolute bottom-16 -right-2 md:-right-8 bg-white px-6 py-4 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] flex items-center gap-4 z-20 border border-gray-50">
                        <span className="text-[#ff6b8b] font-black text-4xl">
                            20+
                        </span>
                        <div className="flex flex-col justify-center">
                            <span className="text-[#282560] font-bold text-sm leading-none mb-1">
                                Years
                            </span>
                            <span className="text-[#282560] font-bold text-sm leading-none">
                                Experienced
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
