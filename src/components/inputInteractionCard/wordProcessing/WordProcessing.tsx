import s from "./WordProcessing.module.scss";

interface IProps {}

const WordProcessing: React.FC<IProps> = () => {
    const text =
        "зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов ";

    return (
        <div className={s.container}>
            {text.split("").map((symbol) => (
                <span>{symbol}</span>
            ))}
        </div>
    );
};

export default WordProcessing;
