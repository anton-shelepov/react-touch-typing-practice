import { RefObject, useEffect, useRef } from "react";
import s from "./WordProcessing.module.scss";

interface IProps {
    text: string;
    charCheckingIndex: number;
    mistakesCount: number;
    alwaysDisplayWrongs?: boolean;
}

const WordProcessing: React.FC<IProps> = ({
    charCheckingIndex,
    text,
    mistakesCount,
    alwaysDisplayWrongs = true,
}) => {
    const spanElement = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanElement.current && mistakesCount) {
            if (alwaysDisplayWrongs) {
                spanElement.current.style.color = "red";
                spanElement.current.style.borderBottom = "1px dotted rgba(255, 0, 0, 0.555)";
            } else {
                spanElement.current.classList.add(s.wrong);
            }
            blinkEffect(spanElement);
        }
    }, [mistakesCount]);

    const blinkEffect = (element: RefObject<HTMLSpanElement>) => {
        element.current!.classList.add(s.blinking);
        setTimeout(() => {
            element.current!.classList.remove(s.blinking);
        }, 100);
    };

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
