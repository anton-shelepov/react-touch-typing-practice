import { useEffect } from "react";
import InputInteractionCard from "../../../components/inputInteractionCard/InputInteractionCard";
import { fetchTextByKeyboardLayoutType } from "../../../store/slices/practiceSlice/practiceSlice";
import KeyboardLayout from "../../../utils/enums/keyboardLayout.enum";
import useAppDispatch from "../../../utils/hooks/useAppDispatch";
import s from "./PracticePage.module.scss";

const PracticePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTextByKeyboardLayoutType(KeyboardLayout.RU));
    }, []);

    return (
        <div className={s.container}>
            <InputInteractionCard />
        </div>
    );
};

export default PracticePage;
