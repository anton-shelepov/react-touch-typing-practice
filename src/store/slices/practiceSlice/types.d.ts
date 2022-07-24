import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";

export interface IPracticeState {
    preparing: PracticePreparingState;
    process: PracticeProcessState;
    result: PracticeResultState;
    loading: LoadingStatus;
    status: PracticeStatus;
}

export type PracticePreparingState = {
    keyboardLayoutType: KeyboardLayout;
    withAlwaysDisplayErrors: boolean;
};

export type PracticeProcessState = {
    text: string;
};

export type PracticeResultState = {};
