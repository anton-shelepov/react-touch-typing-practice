import { useEffect } from "react";
import Loader from "../../../components/loader/Loader";
import PracticePreparing from "../../practicePreparingCard/PracticePreparingCard";
import { fetchTextByKeyboardLayoutType } from "../../../store/slices/practiceSlice/practiceSlice";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../../utils/hooks/useAppDispatch";
import useAppSelector from "../../../utils/hooks/useAppSelector";
import InputInteractionCard from "../../inputInteractionCard/InputInteractionCard";
import s from "./PracticePage.module.scss";

const PracticePage: React.FC = () => {
    const {
        loading,
        status,
        process: { text },
    } = useAppSelector((state) => state.practice);

    return (
        <div className={s.container}>
            {loading === LoadingStatus.PENDING ? (
                <Loader />
            ) : (
                (status === PracticeStatus.PREPARING && <PracticePreparing />) ||
                (status === PracticeStatus.PROCESSING && <InputInteractionCard text={text} />) ||
                (status === PracticeStatus.FINISHED && <></>)
            )}
        </div>
    );
};

export default PracticePage;
