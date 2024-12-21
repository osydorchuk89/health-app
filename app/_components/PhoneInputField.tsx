export const PhoneInputField = (props: {}, ref: React.RefObject<HTMLInputElement>) => {
    return <input {...props} ref={ref} className="border rounded-lg px-4 py-3 w-full" />;
};

// const CustomInput = forwardRef<HTMLInputElement, {}>((props, ref) => (
//     <input
//         {...props}
//         ref={ref}
//         className="border rounded-lg px-4 py-3 w-full"
//     />
// ));
