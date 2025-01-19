"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";

import { useAppSelector } from "../_store/hooks";
import { ContactSuccessDialog } from "./ContactSuccessDialog";
import { contactUsText, dropDownOptions } from "@/app/_lib/data";
import { DownArrow, UpArrow } from "./icons/Arrows";

const PhoneInputField = forwardRef<HTMLInputElement>((props: any, ref) => {
    return <input {...props} ref={ref} className={props.styles} />;
});

export const ContactForm = () => {
    const { language } = useAppSelector((state) => state.language);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
    const [nameError, setNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [specialistError, setSpecialistError] = useState("");
    const [nameFieldFocused, setNameFieldFocused] = useState(false);
    const [phoneNumberFieldFocused, setPhoneNumberFieldFocused] =
        useState(false);
    const [specialistFieldFocused, setSpecialistFieldFocused] = useState(false);

    const defaultDropDownOption = {
        id: 0,
        nameUkr: contactUsText.dropDownTitleUkr,
        nameEng: contactUsText.dropDownTitleEng,
    };

    const [selectedOption, setSelectedOption] = useState(defaultDropDownOption);

    const initialFieldStyle =
        "border border-black rounded-lg px-4 py-2 w-full hover:shadow-custom";
    const errorFieldStyle =
        "border border-2 border-red-700 rounded-lg px-4 py-3 w-full";

    return (
        <form
            noValidate
            className="flex flex-col items-center sm:items-stretch gap-8 w-full sm:w-1/2"
        >
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xxs font-bold">
                        {language === "ua"
                            ? contactUsText.nameInputTitleUkr
                            : contactUsText.nameInputTitleEng}
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder={
                            language === "ua"
                                ? contactUsText.nameInputPlaceholderUkr
                                : contactUsText.nameInputPlaceholderEng
                        }
                        className={
                            nameError && !nameFieldFocused && nameError
                                ? errorFieldStyle
                                : initialFieldStyle
                        }
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setName(event.target.value);
                        }}
                        onFocus={() => setNameFieldFocused(true)}
                    />
                    {nameError && !nameFieldFocused && (
                        <p className="text-red-700 font-medium">{nameError}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xxs font-bold">
                        {language === "ua"
                            ? contactUsText.phoneInputTitleUkr
                            : contactUsText.phoneInputTitleEng}
                    </label>
                    <PhoneInput
                        defaultCountry="UA"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        international
                        withCountryCallingCode
                        inputComponent={PhoneInputField}
                        styles={
                            phoneNumberError &&
                            !phoneNumberFieldFocused &&
                            phoneNumberError
                                ? errorFieldStyle
                                : initialFieldStyle
                        }
                        onFocus={() => setPhoneNumberFieldFocused(true)}
                    />
                    {phoneNumberError && !phoneNumberFieldFocused && (
                        <p className="text-red-700 font-medium">
                            {phoneNumberError}
                        </p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="specialist" className="text-xxs font-bold">
                        {language === "ua"
                            ? contactUsText.dropDownTitleUkr
                            : contactUsText.dropDownTitleEng}
                    </label>
                    <Listbox
                        value={selectedOption}
                        onChange={setSelectedOption}
                    >
                        <ListboxButton
                            className={
                                initialFieldStyle +
                                " flex items-center relative text-start"
                            }
                            onFocus={() => setSpecialistFieldFocused(true)}
                        >
                            {({ open }) => (
                                <>
                                    <span
                                        className={
                                            selectedOption.id === 0
                                                ? "text-pale"
                                                : "text-black"
                                        }
                                    >
                                        {language === "ua"
                                            ? selectedOption.nameUkr
                                            : selectedOption.nameEng}
                                    </span>
                                    {open ? (
                                        <UpArrow className="absolute right-3" isScrollUpButton={false} />
                                    ) : (
                                        <DownArrow className="absolute right-3" />
                                    )}
                                </>
                            )}
                        </ListboxButton>
                        <ListboxOptions
                            anchor="bottom"
                            className="bg-white w-[var(--button-width)] border border-pale rounded-lg py-2"
                        >
                            {dropDownOptions.map((option) => (
                                <ListboxOption
                                    key={option.id}
                                    value={option}
                                    className="px-4 py-1 data-[focus]:bg-accent cursor-pointer"
                                >
                                    {language === "ua"
                                        ? option.nameUkr
                                        : option.nameEng}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                    {specialistError && !specialistFieldFocused && (
                        <p className="text-red-700 font-medium">
                            {specialistError}
                        </p>
                    )}
                </div>
            </div>
            <Image
                src="/cat.png"
                alt="cat"
                width={234}
                height={262}
                className="sm:hidden"
            />
            <div className="flex justify-start">
                <ContactSuccessDialog
                    name={name}
                    phoneNumber={phoneNumber || ""}
                    specialist={selectedOption}
                    handleNameError={(error) => setNameError(error)}
                    handlePhoneNumberError={(error) =>
                        setPhoneNumberError(error)
                    }
                    handleSpecialistError={(error) => setSpecialistError(error)}
                    handleNameFieldFocus={(isFocused) =>
                        setNameFieldFocused(isFocused)
                    }
                    handlePhoneNumberFieldFocus={(isFocused) =>
                        setPhoneNumberFieldFocused(isFocused)
                    }
                    handleSpecialistFieldFocus={(isFocused) =>
                        setSpecialistFieldFocused(isFocused)
                    }
                    handleNameValue={(value) => setName(value)}
                    handlePhoneNumberValue={(value) => setPhoneNumber(value)}
                    handleSpecialistValue={(value) => setSelectedOption(value)}
                />
            </div>
        </form>
    );
};
