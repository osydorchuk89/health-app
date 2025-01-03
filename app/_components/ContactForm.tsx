"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useAppSelector } from "../_store/hooks";
import { ContactSuccessDialog } from "./ContactSuccessDialog";
import { contactUsText } from "@/app/_lib/data";

const PhoneInputField = forwardRef<HTMLInputElement>((props: any, ref) => {
    return <input {...props} ref={ref} className={props.styles} />;
});

export const ContactForm = () => {
    const { language } = useAppSelector((state) => state.language);

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
    const [nameError, setNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [nameFieldFocused, setNameFieldFocused] = useState(false);
    const [phoneNumberFieldFocused, setPhoneNumberFieldFocused] =
        useState(false);

    const initialFieldStyle = "border rounded-lg px-4 py-3 w-full";
    const errorFieldStyle =
        "border border-2 border-red-700 rounded-lg px-4 py-3 w-full";

    return (
        <form
            noValidate
            className="flex flex-col items-center sm:items-stretch gap-8 w-full sm:w-1/2"
        >
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-3">
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
                <div className="flex flex-col gap-3">
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
                    handleNameError={(error) => setNameError(error)}
                    handlePhoneNumberError={(error) =>
                        setPhoneNumberError(error)
                    }
                    handleNameFieldFocus={(isFocused) =>
                        setNameFieldFocused(isFocused)
                    }
                    handlePhoneNumberFieldFocus={(isFocused) =>
                        setPhoneNumberFieldFocused(isFocused)
                    }
                    handleNameValue={(value) => setName(value)}
                    handlePhoneNumberValue={(value) => setPhoneNumber(value)}
                />
            </div>
        </form>
    );
};
