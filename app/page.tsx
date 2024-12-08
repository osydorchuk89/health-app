import { Activities } from "./_components/sections/Activities";
import { Contacts } from "./_components/sections/Contacts";
import { HeroSection } from "./_components/sections/HeroSection";
import { Services } from "./_components/sections/Services";
import { Team } from "./_components/sections/Team";
import { Values } from "./_components/sections/Values";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Values />
            <Services />
            <Activities />
            <Team />
            <Contacts />
        </>
    );
}
