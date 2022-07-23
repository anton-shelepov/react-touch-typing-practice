import {
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    useRef,
    useState,
} from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "../../components/interactionStatistics/InteractionStatistics";
import WordProcessing from "../../components/wordProcessing/WordProcessing";

interface IProps {
    text: string;
}

type CurrentCharChecking = {
    char: string;
    index: number;
};

const InputInteractionCard: React.FC<IProps> = ({ text }) => {
    const [mistakesCount, setMistakesCount] = useState(0);
    const [currentCharChecking, setCurrentCharChecking] = useState<CurrentCharChecking>({
        char: text[0],
        index: 0,
    });

    const progress = useRef(0);

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };

    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.currentTarget.value;
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
            />
            <InteractionStatistics
                completedCount={currentCharChecking.index}
                mistakesCount={mistakesCount}
                textLength={text.length}
            />
        </div>
    );
};

export default InputInteractionCard;
