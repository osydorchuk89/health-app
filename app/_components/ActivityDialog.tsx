import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { CloseIcon } from "./CloseIcon";

interface ActivityDialogProps {
    title: string;
    text: string;
}

export const ActivityDialog = ({ title, text }: ActivityDialogProps) => {
    const [activityDialogOpen, setActivityDialogOpen] = useState(false);

    return (
        <>
            <div
                className="flex justify-center items-center border-[3px] border-accent rounded-2xl px-6 py-12 h-36 cursor-pointer hover:shadow-custom active:shadow-custom active:bg-accent"
                onClick={() => setActivityDialogOpen(true)}
            >
                <p className="text-lg text-center">{title}</p>
            </div>
            <Dialog
                open={activityDialogOpen}
                onClose={() => setActivityDialogOpen(false)}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col gap-10 justify-center px-24 py-20 rounded-2xl bg-white w-[800px]">
                        <CloseIcon
                            style="absolute top-10 right-10 cursor-pointer"
                            handleClick={() => setActivityDialogOpen(false)}
                        />
                        <p className="text-3xl text-center leading-none">
                            {title}
                        </p>
                        <p className="text-base whitespace-pre-line">{text}</p>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
