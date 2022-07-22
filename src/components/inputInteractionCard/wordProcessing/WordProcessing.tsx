import s from "./WordProcessing.module.scss";

interface IProps {
    text: string;
    charCheckingIndex: number;
}

const WordProcessing: React.FC<IProps> = ({ charCheckingIndex, text }) => {
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
                    <span key={index} className={className}>
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

export default WordProcessing;
