import { useEffect } from "react";
import InputInteractionCard from "../../../components/inputInteractionCard/InputInteractionCard";
import Loader from "../../../components/loader/Loader";
import { fetchTextByKeyboardLayoutType } from "../../../store/slices/practiceSlice/practiceSlice";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import useAppDispatch from "../../../utils/hooks/useAppDispatch";
import useAppSelector from "../../../utils/hooks/useAppSelector";
import s from "./PracticePage.module.scss";

const PracticePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTextByKeyboardLayoutType(KeyboardLayout.RU));
    }, []);

    const practiceState = useAppSelector((state) => state.practice);

    return (
        <div className={s.container}>
            {practiceState.loading === "pending" ? (
                <Loader />
            ) : (
                <InputInteractionCard text={practiceState.text} />
            )}
        </div>
    );
};

export default PracticePage;
