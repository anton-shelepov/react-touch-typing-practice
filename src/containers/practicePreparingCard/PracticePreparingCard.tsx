import { FormEventHandler } from "react";
import ButtonRounded from "../../components/_common/buttons/buttonRounded/ButtonRounded";
import CheckboxStyled from "../../components/_common/inputs/checkboxStyled/CheckboxStyled";
import RadioBorderIndication from "../../components/_common/inputs/radioBorderIndication/RadioBorderIndication";
import {
    fetchTextByKeyboardLayoutType,
    setKeyboardLayoutType,
    setPracticeStatus,
    setWithAlwaysDisplayErrors,
} from "../../store/slices/practiceSlice/practiceSlice";
import KeyboardLayout from "../../utils/enums/keyboardLayout.enum";
import PracticeStatus from "../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../utils/hooks/useAppDispatch";
import useAppSelector from "../../utils/hooks/useAppSelector";
import SvgIcon from "../../utils/svg/svgIcon.enum";
import SvgSelector from "../../utils/svg/SvgSelector";
import s from "./PracticePreparingCard.module.scss";

interface IProps {}

const PracticePreparingCard: React.FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const { keyboardLayoutType, withAlwaysDisplayErrors } = useAppSelector(
        (state) => state.practice.preparing
    );

    const onLayoutTypeChange: FormEventHandler<HTMLInputElement> = (e) => {
        dispatch(setKeyboardLayoutType(e.currentTarget.value as KeyboardLayout));
    };

    const onAlwaysDisplayErrorsChange = () => {
        dispatch(setWithAlwaysDisplayErrors(!withAlwaysDisplayErrors));
    };

    const onHandleStartClick = () => {
        dispatch(fetchTextByKeyboardLayoutType(keyboardLayoutType));
        dispatch(setPracticeStatus(PracticeStatus.PROCESSING));
    };

    return (
        <div className={s.container}>
            <h1 className={s.title}>Тренировка слепой печати</h1>
            <div className={s.practice_settings_wrapper}>
                <div className={s.layout_settings}>
                    <RadioBorderIndication
                        name="layoutType"
                        label="Английская раскладка"
                        value={KeyboardLayout.EN}
                        checked={keyboardLayoutType === KeyboardLayout.EN}
                        onChange={onLayoutTypeChange}
                    />
                    <RadioBorderIndication
                        name="layoutType"
                        label="Русская раскладка"
                        value={KeyboardLayout.RU}
                        checked={keyboardLayoutType === KeyboardLayout.RU}
                        onChange={onLayoutTypeChange}
                    />
                </div>
                <CheckboxStyled
                    label="Постоянно отображать неверно введенные символы"
                    checked={withAlwaysDisplayErrors}
                    onChange={onAlwaysDisplayErrorsChange}
                    style={{ margin: "15px" }}
                />
                <ButtonRounded buttonText="Начать тренировку" onClick={onHandleStartClick} />
            </div>
            <div className={s.notification}>
                <SvgSelector iconName={SvgIcon.ALERT} color="white" />
                <p className={s.notification_text}>
                    Перед началом тренировки, убедитесь в правильности выбранной раскладки
                    клавиатуры на своем компьютере
                </p>
            </div>
        </div>
    );
};

export default PracticePreparingCard;
