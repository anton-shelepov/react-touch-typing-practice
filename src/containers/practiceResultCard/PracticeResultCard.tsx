import ResultInfoItem from "../../components/resultInfoItem/ResultInfoItem";
import ButtonRounded from "../../components/_common/buttons/buttonRounded/ButtonRounded";
import SvgIcon from "../../utils/svg/svgIcon.enum";
import s from "./PracticeResultCard.module.scss";

interface IProps {}

const PracticeResultCard: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Результат тренировки</h1>
            <div className={s.result_info}>
                <ResultInfoItem
                    iconName={SvgIcon.CLOCK}
                    resultItemName="Затраченное время:"
                    value={2}
                />
                <ResultInfoItem
                    iconName={SvgIcon.ACCURACY}
                    resultItemName="Средняя точность:"
                    value={2}
                />
                <ResultInfoItem
                    iconName={SvgIcon.SPEED}
                    resultItemName="Максимальная скорость"
                    value={2}
                />
                <ResultInfoItem
                    iconName={SvgIcon.SPEED}
                    resultItemName="Количество ошибок"
                    value={2}
                />
                <ResultInfoItem iconName={SvgIcon.SPEED} resultItemName="Длина текста" value={2} />
            </div>
            <div className={s.buttons}>
                <ButtonRounded buttonText="Попробовать еще раз" onClick={() => {}} />
            </div>
        </div>
    );
};

export default PracticeResultCard;
