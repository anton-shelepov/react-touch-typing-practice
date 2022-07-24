import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import practiceAPI from "../../../api/practice/practiceAPI";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import { IPracticeState, PracticeProcessState, PracticeResultState } from "./types";

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
    process: {} as PracticeProcessState,
    result: {} as PracticeResultState,
    loading: LoadingStatus.IDLE,
    status: PracticeStatus.PREPARING,
};

const practiceSlice = createSlice({
    name: "practice",
    initialState,
    reducers: {
        setKeyboardLayoutType(state, action: PayloadAction<KeyboardLayout>) {
            state.preparing.keyboardLayoutType = action.payload;
        },
        setWithAlwaysDisplayErrors(state, action: PayloadAction<boolean>) {
            state.preparing.withAlwaysDisplayErrors = action.payload;
        },
        setPracticeStatus(state, action: PayloadAction<PracticeStatus>) {
            state.status = action.payload;
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

export const { setKeyboardLayoutType, setPracticeStatus, setWithAlwaysDisplayErrors } =
    practiceSlice.actions;

export default practiceSlice;
