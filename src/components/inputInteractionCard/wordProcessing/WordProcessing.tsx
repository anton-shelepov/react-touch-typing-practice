import { useEffect, useRef } from "react";
import s from "./WordProcessing.module.scss";

interface IProps {
    text: string;
    charCheckingIndex: number;
    mistakesCount: number;
}

const WordProcessing: React.FC<IProps> = ({ charCheckingIndex, text, mistakesCount }) => {
    const spanElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanElement.current && mistakesCount) {
            spanElement.current.style.color = "red";
            spanElement.current.style.borderBottom = "1px dotted red";
        }
    }, [mistakesCount]);

    const splittedText = text.split("");

    return (
        <div className={s.container}>
            {splittedText.map((char, index) => {
                let className = undefined;
                if (charCheckingIndex === index) {
                    className = s.checking;
                }
                if (charCheckingIndex < index) {
                    className = s.uncompleted;
                }
                if (charCheckingIndex > index) {
                    className = s.completed;
                }
                return (
                    <span
                        key={index}
                        className={className}
                        ref={charCheckingIndex === index ? spanElement : undefined}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

export default WordProcessing;
