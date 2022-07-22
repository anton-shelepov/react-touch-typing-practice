import { ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";
import useAppSelector from "../../utils/hooks/useAppSelector";
import Loader from "../loader/Loader";
import ProgressBar from "../progressBar/ProgressBar";
import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "./interactionStatistics/InteractionStatistics";
import WordProcessing from "./wordProcessing/WordProcessing";

interface IProps {}

const InputInteractionCard: React.FC<IProps> = () => {
    const [currentCharChecking, setCurrentCharChecking] = useState("");
    const [currentCharCheckingIndex, setCurrentCharCheckingIndex] = useState(0);

    const progress = useRef(0);

    const practiceState = useAppSelector((state) => state.practice);

    if (practiceState.text) {
        progress.current = (currentCharCheckingIndex / practiceState.text.length) * 100;
    }

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };

    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.currentTarget.value;
        if (value.substring(value.length - 1) === currentCharChecking) {
            setCurrentCharCheckingIndex(currentCharCheckingIndex + 1);
        }
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
                        onBlur={onHandleBlur}
                        autoFocus={true}
                    />
                    <ProgressBar progress={progress.current} />
                    <WordProcessing
                        currentCharChecking={currentCharChecking}
                        setCurrentCharChecking={setCurrentCharChecking}
                        text={practiceState.text}
                        charCheckingIndex={currentCharCheckingIndex}
                    />
                    <InteractionStatistics />
                </>
            )}
        </div>
    );
};

export default InputInteractionCard;
