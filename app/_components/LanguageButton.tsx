interface LanguageButtonProps {
    language: string;
}

export const LanguageButton = ({ language }: LanguageButtonProps) => {
    return (
        <button
            className="flex text-xs px-3 py-2 border border-transparent rounded-lg hover:border-accent active:bg-accent"
            onClick={() => {
                localStorage.setItem("lang", language === "ua" ? "en" : "ua");
                location.reload();
            }}
        >
            {language === "ua" ? "en" : "ua"}
        </button>
    );
};
