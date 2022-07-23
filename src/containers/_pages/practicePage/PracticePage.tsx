import { useEffect } from "react";
import InputInteractionCard from "../../inputInteractionCard/InputInteractionCard";
import Loader from "../../../components/loader/Loader";
import { fetchTextByKeyboardLayoutType } from "../../../store/slices/practiceSlice/practiceSlice";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../../utils/hooks/useAppDispatch";
import useAppSelector from "../../../utils/hooks/useAppSelector";
import s from "./PracticePage.module.scss";

const PracticePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTextByKeyboardLayoutType(KeyboardLayout.RU));
    }, []);

    const { loading, status, text } = useAppSelector((state) => state.practice);

    return (
        <div className={s.container}>
            {/* {status === PracticeStatus.PREPARING && <PracticePreparing />} */}

            {status === PracticeStatus.PROCESSING && loading !== LoadingStatus.PENDING ? (
                <InputInteractionCard text={text} />
            ) : (
                <Loader />
            )}

            {/* {status === PracticeStatus.FINISHED && <PracticeResult />} */}
        </div>
    );
};

export default PracticePage;
