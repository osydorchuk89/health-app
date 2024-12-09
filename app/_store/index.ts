import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface NavigationState {
    section: string;
}

// export interface LanguageState {
//     language: string;
// }

// export interface ContactFormState {
//     dialogIsOpen: boolean;
//     successPopUpIsOpen: boolean;
//     dataIsSending: boolean;
// }

// const chosenLanguage = localStorage.getItem("lang");
// const hasNorwegianLanguage = ["no", "nb", "nn"].some((item) =>
//     navigator.languages.includes(item)
// );
// const inferredLanguage = hasNorwegianLanguage ? "no" : "en";
// const initialLanguage = chosenLanguage ?? inferredLanguage;

const navigationSlice = createSlice({
    name: "navigation",
    initialState: { section: "none" },
    reducers: {
        change(state, action) {
            state.section = action.payload;
        },
    },
});

// const languageSlice = createSlice({
//     name: "language",
//     initialState: { language: initialLanguage },
//     reducers: {},
// });

// const contactFormSlice = createSlice({
//     name: "contactForm",
//     initialState: {
//         dialogIsOpen: false,
//         successPopUpIsOpen: false,
//         failurePopUpIsOpen: false,
//         dataIsSending: false,
//     },
//     reducers: {
//         openDialog(state) {
//             state.dialogIsOpen = true;
//         },
//         closeDialog(state) {
//             state.dialogIsOpen = false;
//         },
//         openSuccessPopUp(state) {
//             state.successPopUpIsOpen = true;
//         },
//         closeSuccessPopUp(state) {
//             state.successPopUpIsOpen = false;
//             state.dialogIsOpen = false;
//         },
//         openFailurePopUp(state) {
//             state.failurePopUpIsOpen = true;
//         },
//         closeFailurePopUp(state) {
//             state.failurePopUpIsOpen = false;
//             state.dialogIsOpen = false;
//         },
//         startSendingData(state) {
//             state.dataIsSending = true;
//         },
//         stopSendingData(state) {
//             state.dataIsSending = false;
//         },
//     },
// });

export const store = configureStore({
    reducer: {
        navigation: navigationSlice.reducer,
        // language: languageSlice.reducer,
        // contactForm: contactFormSlice.reducer,
    },
});
export const navigationActions = navigationSlice.actions;
// export const contactFormActions = contactFormSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
