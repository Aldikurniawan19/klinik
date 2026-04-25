import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "@/Components/Sections/Hero";
import Services from "@/Components/Sections/Services";
import Appointment from "@/Components/Sections/Appointment";
import BookingBanner from "../Components/Sections/BookingBanner";
import QualityServices from "../Components/Sections/QualityServices";
import WhyChooseUs from "../Components/Sections/WhyChooseUs";
import AboutDoctor from "../Components/Sections/AboutDoctor";
import PricingPlans from "../Components/Sections/PricingPlans";
import Testimonials from "../Components/Sections/Testimonials";
import ContactUs from "../Components/Sections/ContactUs";

export default function Welcome() {
    return (
        <MainLayout>
            <Head title="Home - Clinic Master" />

            <Hero />
            <Services />
            <Appointment />
            <BookingBanner />
            <QualityServices />
            <WhyChooseUs />
            <AboutDoctor />
            <PricingPlans />
            <Testimonials />
            <ContactUs />
        </MainLayout>
    );
}
