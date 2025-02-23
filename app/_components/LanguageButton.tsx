import { languageActions } from "../_store";
import { useAppDispatch } from "../_store/hooks";


interface LanguageButtonProps {
    language: string;
}

export const LanguageButton = ({ language }: LanguageButtonProps) => {
    const dispatch = useAppDispatch();
    return (
        <button
            className="flex text-xs px-3 py-2 border border-transparent rounded-lg hover:border-accent active:bg-accent"
            onClick={() => {
                dispatch(languageActions.setLanguage(language === "ua" ? "en" : "ua"));
            }}
        >
            {language === "ua" ? "en" : "ua"}
        </button>
    );
};
