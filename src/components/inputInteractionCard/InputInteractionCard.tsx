import s from "./InputInteractionCard.module.scss";
import InteractionStatistics from "./interactionStatistics/InteractionStatistics";
import WordProcessing from "./wordProcessing/WordProcessing";

interface IProps {}

const InputInteractionCard: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <WordProcessing />
            <InteractionStatistics />
        </div>
    );
};

export default InputInteractionCard;
