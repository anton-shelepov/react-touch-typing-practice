import ResultInfoItem, {
    IResultInfoItemProps,
} from "../../components/resultInfoItem/ResultInfoItem";
import ButtonRounded from "../../components/_common/buttons/buttonRounded/ButtonRounded";
import {
    selectPracticeProcessState,
    setPracticeStatus,
} from "../../store/slices/practiceSlice/practiceSlice";
import PracticeStatus from "../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../utils/hooks/useAppDispatch";
import useAppSelector from "../../utils/hooks/useAppSelector";
import getInputsAccuracy from "../../utils/scripts/getInputsAccuracy";
import SvgIcon from "../../utils/svg/svgIcon.enum";
import s from "./PracticeResultCard.module.scss";

interface IProps {}

const PracticeResultCard: React.FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const { maxTypingSpeed, mistakesCount, text, time } = useAppSelector(
        selectPracticeProcessState
    );
    const resultData: IResultInfoItemProps[] = [
        {
            iconName: SvgIcon.CLOCK,
            resultItemName: "Затраченное время",
            value: time.formattedTime,
        },
        {
            iconName: SvgIcon.ACCURACY,
            resultItemName: "Средняя точность",
            value: getInputsAccuracy(mistakesCount, mistakesCount + text.length),
            unit: "%",
        },
        {
            iconName: SvgIcon.SPEED,
            resultItemName: "Максимальная скорость",
            value: maxTypingSpeed,
            unit: " зн/мин",
        },
        {
            iconName: SvgIcon.WRONG,
            resultItemName: "Количество ошибок",
            value: mistakesCount,
            unit: " шт.",
        },
        {
            iconName: SvgIcon.TEXT,
            resultItemName: "Длина текста",
            value: text.length,
            unit: " симв.",
        },
    ];

    const onHandleRestartClick = () => {
        dispatch(setPracticeStatus(PracticeStatus.PREPARING));
    };

    return (
        <div className={s.container}>
            <h1 className={s.title}>Результат тренировки</h1>
            <div className={s.result_info}>
                {resultData.map((item) => (
                    <ResultInfoItem key={item.resultItemName} {...item} />
                ))}
            </div>
            <div className={s.buttons}>
                <ButtonRounded buttonText="Попробовать еще раз" onClick={onHandleRestartClick} />
            </div>
        </div>
    );
};

export default PracticeResultCard;
