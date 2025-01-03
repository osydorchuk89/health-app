"use client";

import { useInView } from "react-intersection-observer";

import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { navigationActions } from "@/app/_store";
import { ContactCard } from "../ContactCard";
import { SectionTitle } from "../SectionTitle";
import { contactsText } from "@/app/_lib/data";

export const Contacts = () => {
    const dispatch = useAppDispatch();
    const { language } = useAppSelector((state) => state.language);

    const { ref } = useInView({
        rootMargin: "-50% 0% -50% 0%",
        onChange: (inView) => {
            inView && dispatch(navigationActions.change("about"));
        },
    });

    return (
        <div
            id="contacts"
            ref={ref}
            className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 -scroll-mt-10"
        >
            <SectionTitle
                text={
                    language === "ua"
                        ? contactsText.titleUkr
                        : contactsText.titleEng
                }
            />
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex flex-col gap-5 sm:gap-10 w-full xl:w-3/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <ContactCard photo="/icons/timetable-logo.png">
                            <p className="text-base whitespace-pre-line self-center">
                                {language === "ua"
                                    ? contactsText.workingHoursUkr
                                    : contactsText.workingHoursEng}
                            </p>
                        </ContactCard>
                        <ContactCard photo="/icons/marker-logo.png">
                            <p className="text-base text-center">
                                {language === "ua"
                                    ? contactsText.addressUkr
                                    : contactsText.addressEng}
                            </p>
                        </ContactCard>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <div className="bg-neutral rounded-2xl h-80 w-full xl:w-2/5"></div>
            </div>
        </div>
    );
};
