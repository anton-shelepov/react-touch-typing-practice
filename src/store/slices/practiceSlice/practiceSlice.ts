import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import practiceAPI from "../../../api/practice/practiceAPI";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
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
    loading: "idle",
};

const practiceSlice = createSlice({
    name: "practice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTextByKeyboardLayoutType.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(fetchTextByKeyboardLayoutType.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.text = action.payload;
        });
        builder.addCase(fetchTextByKeyboardLayoutType.rejected, (state) => {
            state.loading = "failed";
        });
    },
});

export default practiceSlice;
