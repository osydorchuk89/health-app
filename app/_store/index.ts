import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface NavigationState {
    section: string;
}

export interface ContactFormDialogState {
    isOpen: boolean;
}

export interface SuccesContactDialogState {
    isOpen: boolean;
}

// export interface FieldsValuesState {
//     name: string;
//     phoneNumber: string | undefined;
// }

// export interface ValidationErrorsState {
//     nameError: string;
//     phoneNumberError: string;
// }

// export interface FieldsFocusState {
//     nameFieldFocused: boolean;
//     phoneNumberFieldFocused: boolean;
// }

// export interface FormSubmittedState {
//     formSubmitted: boolean;
// }

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

const contactFormDialogSlice = createSlice({
    name: "contactFormDialog",
    initialState: { isOpen: false },
    reducers: {
        openDialog(state) {
            state.isOpen = true;
        },
        closeDialog(state) {
            state.isOpen = false;
        },
    },
});

const successContactDialogSlice = createSlice({
    name: "successContactDialog",
    initialState: { isOpen: false },
    reducers: {
        openDialog(state) {
            state.isOpen = true;
        },
        closeDialog(state) {
            state.isOpen = false;
        },
    },
});

// const fieldsValuesSlice = createSlice({
//     name: "fieldsValues",
//     initialState: { name: "", phoneNumber: "" },
//     reducers: {
//         setName(state, action) {
//             state.name = action.payload;
//         },
//         setPhoneNumber(state, action) {
//             state.phoneNumber = action.payload;
//         },
//         clearFields(state) {
//             state.name = "";
//             state.phoneNumber = "";
//         },
//     },
// });

// const validationErrorsSlice = createSlice({
//     name: "validationErrors",
//     initialState: { nameError: "", phoneNumberError: "" },
//     reducers: {
//         setNameError(state, action) {
//             state.nameError = action.payload;
//         },
//         setPhoneNumberError(state, action) {
//             state.phoneNumberError = action.payload;
//         },
//     },
// });

// const fieldsFocusSlice = createSlice({
//     name: "fieldsFocus",
//     initialState: { nameFieldFocused: false, phoneNumberFieldFocused: false },
//     reducers: {
//         focusNameField(state) {
//             state.nameFieldFocused = true;
//         },
//         blurNameField(state) {
//             state.nameFieldFocused = false;
//         },
//         focusPhoneNumberField(state) {
//             state.phoneNumberFieldFocused = true;
//         },
//         blurPhoneNumberField(state) {
//             state.phoneNumberFieldFocused = false;
//         },
//     },
// });

// const formSubmittedSlice = createSlice({
//     name: "formSubmitted",
//     initialState: { formSubmitted: false },
//     reducers: {
//         submitForm(state) {
//             state.formSubmitted = true;
//         },
//     },
// });

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
        contactFormDialog: contactFormDialogSlice.reducer,
        successContactDialog: successContactDialogSlice.reducer,
        // fieldsValues: fieldsValuesSlice.reducer,
        // validationErrors: validationErrorsSlice.reducer,
        // fieldsFocus: fieldsFocusSlice.reducer,
        // formSubmitted: formSubmittedSlice.reducer,
        // language: languageSlice.reducer,
    },
});
export const navigationActions = navigationSlice.actions;
export const contactFormActions = contactFormDialogSlice.actions;
export const successContactActions = successContactDialogSlice.actions;
// export const fieldsValuesActions = fieldsValuesSlice.actions;
// export const validationErrorsActions = validationErrorsSlice.actions;
// export const fieldsFocusActions = fieldsFocusSlice.actions;
// export const formSubmittedActions = formSubmittedSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
