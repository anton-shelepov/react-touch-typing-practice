import { Dispatch, SetStateAction } from "react";
import s from "./WordProcessing.module.scss";

interface IProps {
    currentCharChecking: string;
    setCurrentCharChecking: Dispatch<SetStateAction<string>>;
    text: string;
    charCheckingIndex: number;
}

const WordProcessing: React.FC<IProps> = ({
    currentCharChecking,
    setCurrentCharChecking,
    charCheckingIndex,
    text,
}) => {
    const splittedText = text.split("");

    return (
        <div className={s.container}>
            {splittedText.map((char, index) => {
                let className = undefined;
                if (charCheckingIndex === index) {
                    setCurrentCharChecking(char);
                    className = s.checking;
                }
                if (charCheckingIndex < index) {
                    className = s.uncompleted;
                }
                if (charCheckingIndex > index) {
                    className = s.completed;
                }
                return <span className={className}>{char}</span>;
            })}
        </div>
    );
};

export default WordProcessing;
