"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { DarkButton } from "./DarkButton";
import { ContactForm } from "./ContactForm";
import { CloseIcon } from "./CloseIcon";

export const ContactDialog = () => {
    const [contactDialogOpen, setContactDialogOpen] = useState(false);

    return (
        <>
            <DarkButton
                text="консультація"
                handleClick={() => setContactDialogOpen(true)}
            />
            <Dialog
                open={contactDialogOpen}
                onClose={() => setContactDialogOpen(false)}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col gap-10 p-20 rounded-2xl bg-white w-[1200px]">
                        <CloseIcon
                            style="absolute top-10 right-10 cursor-pointer"
                            handleClick={() => setContactDialogOpen(false)}
                        />
                        <p className="text-3xl leading-none">
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
                            />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
