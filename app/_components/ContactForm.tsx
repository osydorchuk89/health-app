import { DarkButton } from "./DarkButton";

export const ContactForm = () => {
    return (
        <form noValidate className="flex flex-col gap-8 w-1/2">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-xxs font-bold">
                        Ваше імʼя
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="введіть Ваше імʼя"
                        className="border rounded-lg px-4 py-3"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-xxs font-bold">
                        Ваш номер телефону
                    </label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+380"
                        className="border rounded-lg px-4 py-3"
                    />
                </div>
            </div>
            <div className="flex justify-start">
                <DarkButton text="передзвонити" />
            </div>
        </form>
    );
};
