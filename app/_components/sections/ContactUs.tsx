import Image from "next/image";

import { ContactForm } from "../ContactForm";

export const ContactUs = () => {
    return (
        <div className="flex flex-col gap-10 p-20">
            <p className="text-3xl">
                якщо потребуєте консультації або бажаєте підписати декларацію
            </p>
            <div className="flex gap-20">
                <ContactForm />
                <Image src="/cat.png" alt="cat" width={234} height={262} />
            </div>
        </div>
    );
};
