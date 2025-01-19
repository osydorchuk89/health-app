"use client";

import { useEffect, useState } from "react";
import { primaryInput } from "detect-it";

import { UpArrow } from "./icons/Arrows";

export const ScrollUpButton = () => {
    const [visible, setVisible] = useState(false);
    const [iconStatus, setIconStatus] = useState("");
    const isTouchDevice = primaryInput === "touch";

    useEffect(() => {
        const toggleVisible = () => {
            const { scrollHeight, scrollTop } = document.documentElement;
            if (scrollTop > scrollHeight * 0.8) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const baseIconClassName =
        "p-7 border border-pale rounded-full z-10 cursor-pointer bg-primary active:bg-accent";
    const mouseDeviceIconClassName =
        baseIconClassName + " hover:border-accent hover:shadow-custom";

    return (
        <div className="w-full flex justify-end items-center fixed bottom-10 px-4 md:px-10 lg:px-20">
            <div
                className={isTouchDevice ? baseIconClassName : mouseDeviceIconClassName}
                onClick={scrollToTop}
                onMouseEnter={() => setIconStatus("hovered")}
                onMouseDown={() => setIconStatus("clicked")}
                onMouseLeave={() => setIconStatus("")}
                style={{ display: visible ? "inline" : "none" }}
            >
                <UpArrow isScrollUpButton iconStatus={iconStatus} />
            </div>
        </div>
    );
};
