import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import practiceAPI from "../../../api/practice/practiceAPI";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import { RootState } from "../../store";
import { CurrentCharChecking, IPracticeState, ProcessTime } from "./types";

export const fetchTextByKeyboardLayoutType = createAsyncThunk(
    "practice/fetchTextByKeyboardLayoutType",
    async (keyboardLayoutType: KeyboardLayout) => {
        if (keyboardLayoutType === KeyboardLayout.EN) {
            const response = await practiceAPI.getEnglishText();
            return response.data.data[0].content;
        }
        if (keyboardLayoutType === KeyboardLayout.RU) {
            const response = await practiceAPI.getRussianText();
            return response.data.text;
        }
    }
);

const initialState: IPracticeState = {
    preparing: {
        keyboardLayoutType: KeyboardLayout.RU,
        withAlwaysDisplayErrors: true,
    },
    process: {
        maxTypingSpeed: 0,
        mistakesCount: 0,
        text: "",
        time: {
            formattedTime: "00:00",
            totalSeconds: 0,
        },
        currentCharChecking: {
            char: "",
            index: 0,
        },
    },
    loading: LoadingStatus.IDLE,
    status: PracticeStatus.PREPARING,
};

const practiceSlice = createSlice({
    name: "practice",
    initialState,
    reducers: {
        setPracticeStatus(state, action: PayloadAction<PracticeStatus>) {
            state.status = action.payload;
        },

        // Preparing state actions

        setKeyboardLayoutType(state, action: PayloadAction<KeyboardLayout>) {
            state.preparing.keyboardLayoutType = action.payload;
        },
        setWithAlwaysDisplayErrors(state, action: PayloadAction<boolean>) {
            state.preparing.withAlwaysDisplayErrors = action.payload;
        },

        // Process state actions

        setMistakesCount(state, action: PayloadAction<number>) {
            state.process.mistakesCount = action.payload;
        },
        setCurrentCharChecking(state, action: PayloadAction<CurrentCharChecking>) {
            state.process.currentCharChecking = action.payload;
        },
        setTimeFromStart(state, action: PayloadAction<ProcessTime>) {
            state.process.time = action.payload;
        },
        setMaxTypingSpeed(state, action: PayloadAction<number>) {
            state.process.maxTypingSpeed = action.payload;
        },

        // Reset data

        resetProcessState(state) {
            state.process = initialState.process;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTextByKeyboardLayoutType.pending, (state) => {
            state.loading = LoadingStatus.PENDING;
        });
        builder.addCase(fetchTextByKeyboardLayoutType.fulfilled, (state, action) => {
            state.loading = LoadingStatus.SUCCEEDED;
            if (action.payload) {
                state.process.text = action.payload;
            }
        });
        builder.addCase(fetchTextByKeyboardLayoutType.rejected, (state) => {
            state.loading = LoadingStatus.FAILED;
        });
    },
});

export const {
    setKeyboardLayoutType,
    setPracticeStatus,
    setWithAlwaysDisplayErrors,
    setCurrentCharChecking,
    setMistakesCount,
    setTimeFromStart,
    setMaxTypingSpeed,
    resetProcessState,
} = practiceSlice.actions;

export const selectPracticeState = (state: RootState) => state.practice;
export const selectPracticePreparingState = (state: RootState) => state.practice.preparing;
export const selectPracticeProcessState = (state: RootState) => state.practice.process;

export default practiceSlice;
