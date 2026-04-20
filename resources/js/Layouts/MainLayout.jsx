import Navbar from "../Components/Sections/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-surface-light">
            <Navbar />
            <main>{children}</main>
        </div>
    );
}
