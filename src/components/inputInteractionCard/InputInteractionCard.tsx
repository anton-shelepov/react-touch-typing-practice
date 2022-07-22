import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import useAppSelector from "../../utils/hooks/useAppSelector";
import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "./interactionStatistics/InteractionStatistics";
import WordProcessing from "./wordProcessing/WordProcessing";

interface IProps {}

const InputInteractionCard: React.FC<IProps> = () => {
    const [inputValue, setInputValue] = useState("");
    const [currentCharChecking, setCurrentCharChecking] = useState("");

    const text = useAppSelector((state) => state.practice.text);

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };
    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.currentTarget.value);
    };

    console.log(text);

    return (
        <div className={s.container}>
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
            />
            <InteractionStatistics />
        </div>
    );
};

export default InputInteractionCard;
