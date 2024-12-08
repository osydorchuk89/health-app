import { ContactCard } from "../ContactCard";

export const Contacts = () => {
    const openingHoursText = "пн-пт 9:00-17:00\nсб 9:00-13:00\nнд - вихідний";

    return (
        <div className="flex flex-col gap-10 p-20">
            <p className="text-3xl">звʼязатися з нами</p>
            <div className="flex gap-8">
                <div className="flex flex-col gap-10 w-3/5">
                    <div className="grid grid-cols-2 gap-5">
                        <ContactCard photo="/icons/timetable-logo.png">
                            <p className="text-base whitespace-pre-line self-center">
                                {openingHoursText}
                            </p>
                        </ContactCard>
                        <ContactCard photo="/icons/marker-logo.png">
                            <p className="text-base">
                                Україна, м. Івано-Франківськ, вулиця Січових
                                Стрільців 18, ІІ поверх
                            </p>
                        </ContactCard>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <ContactCard photo="/icons/mail-logo.png">
                            <p className="text-base self-center">
                                nezkrayu@gmail.com
                            </p>
                        </ContactCard>
                        <ContactCard photo="/icons/phone-logo.png">
                            <p className="text-base self-center">
                                +380992764663
                            </p>
                        </ContactCard>
                    </div>
                </div>
                <div className="bg-neutral rounded-2xl h-full w-2/5"></div>
            </div>
        </div>
    );
};
