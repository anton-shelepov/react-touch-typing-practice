import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import useAppSelector from "../../utils/hooks/useAppSelector";
import Loader from "../loader/Loader";
import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "./interactionStatistics/InteractionStatistics";
import WordProcessing from "./wordProcessing/WordProcessing";

interface IProps {}

const InputInteractionCard: React.FC<IProps> = () => {
    const [inputValue, setInputValue] = useState("");
    const [currentCharChecking, setCurrentCharChecking] = useState("");

    const practiceState = useAppSelector((state) => state.practice);

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };
    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.currentTarget.value);
    };

    return (
        <div className={s.container}>
            {practiceState.loading === "pending" || practiceState.text === undefined ? (
                <Loader />
            ) : (
                <>
                    <input
                        className={s.input_hidden}
                        onChange={onHandleChange}
                        value={inputValue}
                        onBlur={onHandleBlur}
                        autoFocus={true}
                    />
                    <WordProcessing
                        currentCharChecking={currentCharChecking}
                        setCurrentCharChecking={setCurrentCharChecking}
                        text={practiceState.text}
                    />
                    <InteractionStatistics />
                </>
            )}
        </div>
    );
};

export default InputInteractionCard;
