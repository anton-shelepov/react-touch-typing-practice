import { useEffect } from "react";
import Loader from "../../../components/loader/Loader";
import {
    resetProcessState,
    selectPracticeState,
} from "../../../store/slices/practiceSlice/practiceSlice";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../../utils/hooks/useAppDispatch";
import useAppSelector from "../../../utils/hooks/useAppSelector";
import InputInteractionCard from "../../inputInteractionCard/InputInteractionCard";
import PracticePreparingCard from "../../practicePreparingCard/PracticePreparingCard";
import PracticeResultCard from "../../practiceResultCard/PracticeResultCard";
import s from "./PracticePage.module.scss";

interface IProps {}

const PracticePage: React.FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {
        loading,
        status,
        process: { text },
    } = useAppSelector(selectPracticeState);

    useEffect(() => {
        if (status === PracticeStatus.PREPARING && text !== "") {
            dispatch(resetProcessState());
        }
    }, [status]);

    return (
        <div className={s.container}>
            {loading === LoadingStatus.PENDING ? (
                <Loader />
            ) : (
                (status === PracticeStatus.PREPARING && <PracticePreparingCard />) ||
                (status === PracticeStatus.PROCESSING && <InputInteractionCard />) ||
                (status === PracticeStatus.FINISHED && <PracticeResultCard />)
            )}
        </div>
    );
};

export default PracticePage;
