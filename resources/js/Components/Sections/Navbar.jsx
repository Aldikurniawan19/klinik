import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm font-sans text-surface-dark">
            {/* Bagian Logo */}
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    @fx
                </div>
                <span className="font-bold text-xl leading-tight">
                    Clinic
                    <br />
                    Master
                </span>
            </div>

            {/* Bagian Menu Navigasi */}
            <ul className="hidden md:flex items-center gap-8 font-medium">
                <li>
                    <Link
                        href="/"
                        className="text-primary border-b-2 border-primary pb-1"
                    >
                        Home +
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Pages +
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Team +
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Services +
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Blogs +
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>

            {/* Bagian Kontak & Tombol Appointment */}
            <div className="hidden lg:flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="bg-blue-50 p-2 rounded-full text-primary">
                        📞
                    </span>
                    <div className="text-sm">
                        <p className="text-gray-500 text-xs">24/7 Support</p>
                        <p className="font-bold">+1 234 567 890</p>
                    </div>
                </div>
                <button className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md">
                    Appointment
                </button>
            </div>
        </nav>
    );
}
