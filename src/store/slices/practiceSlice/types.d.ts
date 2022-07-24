import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";

export interface IPracticeState {
    preparing: PracticePreparingState;
    process: PracticeProcessState;
    loading: LoadingStatus;
    status: PracticeStatus;
}

export type PracticePreparingState = {
    keyboardLayoutType: KeyboardLayout;
    withAlwaysDisplayErrors: boolean;
};

export type PracticeProcessState = {
    text: string;
    mistakesCount: number;
    currentCharChecking: CurrentCharChecking;
    time: ProcessTime;
    maxTypingSpeed: number;
};

// Common types

export type CurrentCharChecking = {
    char: string;
    index: number;
};

export type ProcessTime = {
    totalSeconds: number;
    formattedTime: string;
};
