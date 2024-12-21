import Image from "next/image";

import { ContactForm } from "../ContactForm";
import { SectionTitle } from "../SectionTitle";

export const ContactUs = () => {
    return (
        <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20">
            <SectionTitle text="якщо потребуєте консультації або бажаєте підписати декларацію" />
            <div className="flex flex-col items-center justify-between sm:flex-row gap-8 sm:gap-20">
                <ContactForm />
                <Image
                    src="/cat.png"
                    alt="cat"
                    width={234}
                    height={262}
                    className="hidden sm:block"
                />
            </div>
        </div>
    );
};
