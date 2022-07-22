import { Dispatch, SetStateAction } from "react";
import s from "./WordProcessing.module.scss";

interface IProps {
    currentCharChecking: string;
    setCurrentCharChecking: Dispatch<SetStateAction<string>>;
    text: string;
}

const WordProcessing: React.FC<IProps> = ({ currentCharChecking, setCurrentCharChecking }) => {
    const text =
        "зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов ";

    return (
        <div className={s.container}>
            {text.split("").map((char) => (
                <span className={s.unchecked}>{char}</span>
            ))}
        </div>
    );
};

export default WordProcessing;
