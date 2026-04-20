import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "@/Components/Sections/Hero";
import Services from "@/Components/Sections/Services";
import Appointment from "@/Components/Sections/Appointment";
import BookingBanner from "../Components/Sections/BookingBanner";
import QualityServices from "../Components/Sections/QualityServices";

export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Home - Clinic Master" />

            <Hero />
            <Services />
            <Appointment />
            <BookingBanner />
            <QualityServices />
        </MainLayout>
    );
}
