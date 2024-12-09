import { Activities } from "./_components/sections/Activities";
import { Contacts } from "./_components/sections/Contacts";
import { ContactUs } from "./_components/sections/ContactUs";
import { HeroSection } from "./_components/sections/HeroSection";
import { Services } from "./_components/sections/Services";
import { Team } from "./_components/sections/Team";
import { Values } from "./_components/sections/Values";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Activities />
            <Services />
            <Team />
            <ContactUs />
            <Values />
            <Contacts />
        </>
    );
}
