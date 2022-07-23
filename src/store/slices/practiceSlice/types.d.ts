import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";

export interface IPracticeState {
    text: string;
    loading: LoadingStatus;
    status: PracticeStatus;
}
