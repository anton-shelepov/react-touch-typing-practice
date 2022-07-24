import {
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    useRef,
    useState,
} from "react";
import InteractionStatistics from "../../components/interactionStatistics/InteractionStatistics";
import ProgressBar from "../../components/progressBar/ProgressBar";
import WordProcessing from "../../components/wordProcessing/WordProcessing";
import useAppSelector from "../../utils/hooks/useAppSelector";
import s from "./InputInteractionCard.module.scss";

interface IProps {
    text: string;
}

type CurrentCharChecking = {
    char: string;
    index: number;
};

const InputInteractionCard: React.FC<IProps> = ({ text }) => {
    const progress = useRef(0);

    const [mistakesCount, setMistakesCount] = useState(0);
    const [currentCharChecking, setCurrentCharChecking] = useState<CurrentCharChecking>({
        char: text[0],
        index: 0,
    });

    const withAlwaysDisplayErrors = useAppSelector(
        (state) => state.practice.preparing.withAlwaysDisplayErrors
    );

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };

    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.currentTarget.value;
        checkAndСonfirmOrDeniedInputValue(value);
    };

    const checkAndСonfirmOrDeniedInputValue = (value: string) => {
        if (value[value.length - 1] === currentCharChecking.char) {
            progress.current = ((currentCharChecking.index + 1) / text.length) * 100;
            setCurrentCharChecking({
                char: text[currentCharChecking.index + 1],
                index: currentCharChecking.index + 1,
            });
            return;
        }
        setMistakesCount(mistakesCount + 1);
    };

    const onBackspacePreventDefault: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Backspace") e.preventDefault();
    };

    return (
        <div className={s.container}>
            <input
                className={s.input_hidden}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
                onKeyDown={onBackspacePreventDefault}
                autoFocus={true}
            />
            <ProgressBar progress={progress.current} />
            <WordProcessing
                text={text}
                charCheckingIndex={currentCharChecking.index}
                mistakesCount={mistakesCount}
                alwaysDisplayWrongs={withAlwaysDisplayErrors}
            />
            <InteractionStatistics
                completeCount={currentCharChecking.index}
                mistakesCount={mistakesCount}
            />
        </div>
    );
};

export default InputInteractionCard;
