import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import { primaryInput } from "detect-it";

interface ActivityDialogProps {
    title: string;
    text: string;
}

export const ActivityDialog = ({ title, text }: ActivityDialogProps) => {
    const [activityDialogOpen, setActivityDialogOpen] = useState(false);

    const baseContainerClassName =
        "flex justify-center items-center border-[3px] border-accent rounded-2xl px-6 h-24 md:h-36 cursor-pointer active:shadow-custom active:bg-accent active:border-accent";
    const mouseDeviceContainerClassName =
        baseContainerClassName + " hover:shadow-custom hover:border-accent";

    const isTouchDevice = primaryInput === "touch";

    return (
        <>
            <div
                className={
                    isTouchDevice
                        ? baseContainerClassName
                        : mouseDeviceContainerClassName
                }
                onClick={() => setActivityDialogOpen(true)}
            >
                <p className="text-lg font-medium text-center">{title}</p>
            </div>
            <Dialog
                open={activityDialogOpen}
                onClose={() => setActivityDialogOpen(false)}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/70" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col gap-10 justify-center px-10 sm:px-20 lg:px-24 py-10 lg:py-20 rounded-2xl bg-white ] lg:w-[800px]">
                        <CloseIcon
                            handleClick={() => setActivityDialogOpen(false)}
                        />
                        <p className="text-[40px] sm:text-[62px] lg:text-3xl text-center leading-none">
                            {title}
                        </p>
                        <p className="text-base whitespace-pre-line">{text}</p>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
};
