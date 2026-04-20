import React from "react";

export default function Hero() {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 font-sans overflow-hidden">
            {/* Kiri: Teks & Aksi */}
            <div className="w-full md:w-1/2 flex flex-col gap-8 z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-surface-dark leading-[1.1]">
                    Get Beautiful <br />
                    <span className="text-primary relative">
                        Straight Smile
                        {/* Garis bawah melengkung hiasan (opsional) */}
                        <svg
                            className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-50"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 5 Q 50 15 100 5"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="3"
                            />
                        </svg>
                    </span>{" "}
                    <br />
                    Quickly
                </h1>

                <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                    Experienced staff is dedicated to improving our patients'
                    dental health and enhancing.
                </p>

                {/* Kotak Pilihan Dokter */}
                <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex items-center justify-between max-w-md">
                    <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                            Available Doctors
                        </p>
                        <p className="text-lg font-bold text-surface-dark">
                            Select Doctor
                        </p>
                    </div>
                    {/* Dummy Avatars */}
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white shadow-sm flex items-center justify-center text-xl">
                            👩‍⚕️
                        </div>
                        <div className="w-10 h-10 rounded-full bg-pink-200 border-2 border-white shadow-sm flex items-center justify-center text-xl">
                            👨‍⚕️
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white shadow-sm text-sm font-bold text-primary">
                            +
                        </div>
                    </div>
                </div>

                {/* Info Rating */}
                <div className="flex items-center gap-3 mt-2">
                    <div className="flex text-yellow-400 text-xl tracking-widest">
                        ★★★★★
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-extrabold text-surface-dark text-lg">
                            4.8
                        </span>
                        <span className="text-gray-500 text-sm font-medium">
                            12k ratings on google
                        </span>
                    </div>
                </div>
            </div>

            {/* Kanan: Area Gambar & Floating Cards */}
            <div className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0">
                {/* Background Lingkaran/Aksen */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-50/80 rounded-full -z-10"></div>

                {/* Gambar Utama (Placeholder) */}
                <div className="w-[300px] md:w-[380px] h-[400px] md:h-[500px] bg-gray-200 rounded-b-[150px] rounded-t-[40px] overflow-hidden shadow-2xl border-4 border-white flex flex-col items-center justify-center text-gray-400 relative">
                    <span className="mb-2">📷 Area Gambar Dokter</span>
                    <span className="text-xs text-center px-4">
                        Simpan gambar PNG transparan di <br />{" "}
                        <code className="bg-gray-300 text-gray-700 px-1 rounded">
                            public/images/doctor.png
                        </code>
                        <br /> lalu panggil dengan tag &lt;img
                        src="/images/doctor.png" /&gt; di sini.
                    </span>
                </div>

                {/* Floating Card 1: Services (Kiri Bawah) */}
                <div
                    className="absolute bottom-8 -left-4 md:left-4 bg-white px-5 py-4 rounded-xl shadow-xl flex flex-col gap-3 font-semibold text-surface-dark text-sm border border-gray-100 animate-bounce"
                    style={{ animationDuration: "3s" }}
                >
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                        Teeth Whitening
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>{" "}
                        Root Canal
                    </div>
                </div>

                {/* Floating Card 2: Profil Dokter (Kanan Atas) */}
                <div className="absolute top-12 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-xl flex items-start gap-4 border border-gray-100 max-w-[220px]">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-2xl">
                        👩‍⚕️
                    </div>
                    <div>
                        <p className="font-bold text-surface-dark text-sm mb-0.5">
                            Dr. Natali Jackson
                        </p>
                        <p className="text-[11px] text-accent font-medium mb-1">
                            Dental Experts
                        </p>
                        <p className="text-[10px] text-gray-400 leading-tight">
                            "It is a long established fact that a reader will be
                            distracted..."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
