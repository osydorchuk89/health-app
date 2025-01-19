"use client";

import axios from "axios";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { isPossiblePhoneNumber } from "react-phone-number-input";

import { DarkButton } from "./DarkButton";
import { CloseIcon } from "./icons/CloseIcon";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { contactFormActions, successContactActions } from "../_store";
import { contactUsText } from "@/app/_lib/data";

interface SpecialistOption {
    id: number;
    nameUkr: string;
    nameEng: string;
}

interface ContactSuccessDialogProps {
    name: string;
    phoneNumber: string;
    specialist: SpecialistOption;
    handleNameError: (error: string) => void;
    handlePhoneNumberError: (error: string) => void;
    handleSpecialistError: (error: string) => void;
    handleNameFieldFocus: (isFocused: boolean) => void;
    handlePhoneNumberFieldFocus: (isFocused: boolean) => void;
    handleSpecialistFieldFocus: (isFocused: boolean) => void;
    handleNameValue: (value: string) => void;
    handlePhoneNumberValue: (value: string) => void;
    handleSpecialistValue: (value: SpecialistOption) => void;
}

export const ContactSuccessDialog = ({
    name,
    phoneNumber,
    specialist,
    handleNameError,
    handlePhoneNumberError,
    handleSpecialistError,
    handleNameFieldFocus,
    handlePhoneNumberFieldFocus,
    handleSpecialistFieldFocus,
    handleNameValue,
    handlePhoneNumberValue,
    handleSpecialistValue,
}: ContactSuccessDialogProps) => {
    const { isOpen } = useAppSelector((store) => store.successContactDialog);
    const { language } = useAppSelector((state) => state.language);

    const dispatch = useAppDispatch();

    const validateInput = (
        name: string,
        phoneNumber: string,
        specialist: SpecialistOption
    ) => {
        const errors = {
            name: "",
            phoneNumber: "",
            specialist: "",
        };
        const trimmedName = name.trim();
        const trimmedPhoneNumber = phoneNumber.trim();
        if (!trimmedName) {
            errors.name =
                language === "ua"
                    ? contactUsText.nameErrorUkr
                    : contactUsText.nameErrorEng;
        }
        if (!trimmedPhoneNumber) {
            errors.phoneNumber =
                language === "ua"
                    ? contactUsText.phoneBlankErrorUkr
                    : contactUsText.phoneBlankErrorEng;
        }
        if (trimmedPhoneNumber && !isPossiblePhoneNumber(trimmedPhoneNumber)) {
            errors.phoneNumber =
                language === "ua"
                    ? contactUsText.phoneInvalidErrorUkr
                    : contactUsText.phoneInvalidErrorEng;
        }
        if (specialist.nameUkr === "оберіть спеціаліста") {
            errors.specialist =
                language === "ua"
                    ? contactUsText.specialistErrorUkr
                    : contactUsText.specialistErrorEng;
        }
        return errors;
    };

    const sendTelegramMessage = async (name: string, phoneNumber: string, specialist: string) => {
        const message = `Ім'я: ${name}, номер телефону: ${phoneNumber}, обраний спеціаліст: ${specialist}`;

        const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
        const telegramURL = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${telegramChatId}&text=${message}`;
        try {
            await axios.get(telegramURL);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <DarkButton
                text={
                    language === "ua"
                        ? contactUsText.buttonUkr
                        : contactUsText.buttonEng
                }
                type="submit"
                handleClick={async (event) => {
                    event.preventDefault();
                    const errors = validateInput(name, phoneNumber, specialist);
                    if (
                        errors.name ||
                        errors.phoneNumber ||
                        errors.specialist
                    ) {
                        handleNameError(errors.name);
                        handlePhoneNumberError(errors.phoneNumber);
                        handleSpecialistError(errors.specialist);
                        handleNameFieldFocus(false);
                        handlePhoneNumberFieldFocus(false);
                        handleSpecialistFieldFocus(false);
                        return;
                    }

                    await sendTelegramMessage(name, phoneNumber, specialist.nameUkr);

                    handleNameValue("");
                    handlePhoneNumberValue("");
                    handleSpecialistValue({
                        id: 0,
                        nameUkr: contactUsText.dropDownTitleUkr,
                        nameEng: contactUsText.dropDownTitleEng,
                    });
                    dispatch(successContactActions.openDialog());
                    dispatch(contactFormActions.closeDialog());
                }}
            />
            <Dialog
                open={isOpen}
                onClose={() => dispatch(successContactActions.closeDialog())}
            >
                <DialogBackdrop className="fixed inset-0 bg-black/70" />
                <div className="fixed inset-0 flex w-screen items-center justify-center">
                    <DialogPanel className="fixed flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-20 rounded-2xl bg-white w-[90%] xl:w-[1200px]">
                        <CloseIcon
                            handleClick={() =>
                                dispatch(successContactActions.closeDialog())
                            }
                        />
                        <div>
                            <p className="text-[40px] sm:text-[62px] md:text-3xl leading-tight sm:leading-none whitespace-pre-line">
                                {
                                    "дякую, що обрали нас\nми скоро вам зателефонуємо"
                                }
                            </p>
                        </div>
                        <div className="flex justify-center">
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
