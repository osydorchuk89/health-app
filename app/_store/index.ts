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

export interface LanguageState {
    language: string;
}

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

const languageSlice = createSlice({
    name: "language",
    initialState: { language: "ua" },
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        },
    },
});

export const store = configureStore({
    reducer: {
        navigation: navigationSlice.reducer,
        contactFormDialog: contactFormDialogSlice.reducer,
        successContactDialog: successContactDialogSlice.reducer,
        language: languageSlice.reducer,
    },
});
export const navigationActions = navigationSlice.actions;
export const contactFormActions = contactFormDialogSlice.actions;
export const successContactActions = successContactDialogSlice.actions;
export const languageActions = languageSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
