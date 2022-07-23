import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import practiceAPI from "../../../api/practice/practiceAPI";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import { IPracticeState } from "./types";

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
    text: "",
    loading: LoadingStatus.IDLE,
    status: PracticeStatus.PROCESSING,
};

const practiceSlice = createSlice({
    name: "practice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTextByKeyboardLayoutType.pending, (state) => {
            state.loading = LoadingStatus.PENDING;
        });
        builder.addCase(fetchTextByKeyboardLayoutType.fulfilled, (state, action) => {
            state.loading = LoadingStatus.SUCCEEDED;
            if (action.payload) {
                state.text = action.payload;
            }
        });
        builder.addCase(fetchTextByKeyboardLayoutType.rejected, (state) => {
            state.loading = LoadingStatus.FAILED;
        });
    },
});

export default practiceSlice;
