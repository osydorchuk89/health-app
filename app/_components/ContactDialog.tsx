"use client";

import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { DarkButton } from "./DarkButton";
import { ContactForm } from "./ContactForm";
import { CloseIcon } from "./icons/CloseIcon";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { contactFormActions } from "../_store";

export const ContactDialog = () => {
    const { isOpen } = useAppSelector((store) => store.contactFormDialog);
    const { language } = useAppSelector((store) => store.language);

    const dispatch = useAppDispatch();

    return (
        <>
            <DarkButton
                text={language === "ua" ? "консультація" : "consultation"}
                handleClick={(event) => {
                    event.preventDefault();
                    dispatch(contactFormActions.openDialog());
                }}
            />
            <Dialog
                open={isOpen}
                onClose={() => dispatch(contactFormActions.closeDialog())}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/70" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-10 rounded-2xl bg-white w-[90%] xl:w-[1200px] max-h-[calc(100vh_-_40px)] overflow-y-auto">
                        <CloseIcon
                            handleClick={() =>
                                dispatch(contactFormActions.closeDialog())
                            }
                        />
                        <p className="text-[40px] sm:text-[62px] md:text-3xl leading-tight sm:leading-none">
                            якщо потребуєте консультації або бажаєте підписати
                            декларацію
                        </p>

                        <div className="flex gap-20">
                            <ContactForm />
                            <Image
                                src="/cat.png"
                                alt="cat"
                                width={234}
                                height={262}
                                className="hidden sm:block"
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
