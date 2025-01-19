export const LeftArrow = () => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.75 12.5C0.75 18.713 5.787 23.75 12 23.75C18.213 23.75 23.25 18.713 23.25 12.5C23.25 6.287 18.213 1.25 12 1.25C5.787 1.25 0.749999 6.287 0.75 12.5ZM11.3644 10.5714L18.375 10.5714L18.375 14.4286L11.3644 14.4286L11.3644 18.5L5.625 12.5L11.3644 6.5L11.3644 10.5714Z"
                fill="#B5B5B5"
            />
        </svg>
    );
};

export const RightArrow = () => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M23.25 12.5C23.25 6.287 18.213 1.25 12 1.25C5.787 1.25 0.75 6.287 0.75 12.5C0.749999 18.713 5.787 23.75 12 23.75C18.213 23.75 23.25 18.713 23.25 12.5ZM12.6356 14.4286L5.625 14.4286L5.625 10.5714L12.6356 10.5714L12.6356 6.5L18.375 12.5L12.6356 18.5L12.6356 14.4286Z"
                fill="#B5B5B5"
            />
        </svg>
    );
};

export const UpArrow = ({
    isScrollUpButton,
    className,
    iconStatus,
}: {
    isScrollUpButton: boolean;
    className?: string;
    iconStatus?: string;
}) => {
    let iconColor: string;

    if (!isScrollUpButton) {
        iconColor = "black";
    } else {
        switch (iconStatus) {
            case "hovered":
                iconColor = "#00AA4F";
                break;
            case "clicked":
                iconColor = "black";
                break;
            default:
                iconColor = "#B5B5B5";
        }
    }

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 15.9998C17.1977 15.9997 17.391 15.9411 17.5554 15.8312C17.7198 15.7213 17.848 15.5651 17.9236 15.3824C17.9993 15.1997 18.0191 14.9987 17.9806 14.8048C17.942 14.6108 17.8468 14.4326 17.707 14.2928L12.707 9.29279C12.5194 9.10532 12.2651 9 12 9C11.7348 9 11.4805 9.10532 11.293 9.29279L6.29297 14.2928C6.15316 14.4326 6.05795 14.6108 6.01939 14.8048C5.98082 14.9987 6.00062 15.1997 6.07629 15.3824C6.15196 15.5651 6.2801 15.7213 6.44451 15.8312C6.60892 15.9411 6.80222 15.9997 6.99997 15.9998L17 15.9998Z"
                fill={iconColor}
            />
        </svg>
    );
};

export const DownArrow = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.00003 9C6.80228 9.00004 6.60898 9.05871 6.44457 9.1686C6.28016 9.27848 6.15202 9.43465 6.07635 9.61735C6.00068 9.80005 5.98088 10.0011 6.01945 10.195C6.05802 10.389 6.15322 10.5671 6.29303 10.707L11.293 15.707C11.4806 15.8945 11.7349 15.9998 12 15.9998C12.2652 15.9998 12.5195 15.8945 12.707 15.707L17.707 10.707C17.8468 10.5671 17.942 10.389 17.9806 10.195C18.0192 10.0011 17.9994 9.80005 17.9237 9.61735C17.848 9.43465 17.7199 9.27848 17.5555 9.1686C17.3911 9.05871 17.1978 9.00004 17 9H7.00003Z"
                fill="black"
            />
        </svg>
    );
};
