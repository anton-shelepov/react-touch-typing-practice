import { ChangeEventHandler, FocusEventHandler, useRef, useState } from "react";
import ProgressBar from "../progressBar/ProgressBar";
import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "./interactionStatistics/InteractionStatistics";
import WordProcessing from "./wordProcessing/WordProcessing";

interface IProps {
    text: string;
}

type CurrentCharChecking = {
    char: string;
    index: number;
};

const InputInteractionCard: React.FC<IProps> = ({ text }) => {
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

        // Если был введен верный символ и в state имеется свойство text
        if (value.substring(value.length - 1) === currentCharChecking.char && text) {
            setCurrentCharChecking({
                char: text[currentCharChecking.index + 1],
                index: currentCharChecking.index + 1,
            });
            progress.current = (currentCharChecking.index / text.length) * 100;
        }
    };

    return (
        <div className={s.container}>
            <input
                className={s.input_hidden}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
                autoFocus={true}
            />
            <ProgressBar progress={progress.current} />
            <WordProcessing text={text} charCheckingIndex={currentCharChecking.index} />
            <InteractionStatistics />
        </div>
    );
};

export default InputInteractionCard;
