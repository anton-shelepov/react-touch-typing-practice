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
};

const practiceSlice = createSlice({
    name: "practice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTextByKeyboardLayoutType.fulfilled, (state, action) => {
            state.text = action.payload;
        });
    },
});

export default practiceSlice;
