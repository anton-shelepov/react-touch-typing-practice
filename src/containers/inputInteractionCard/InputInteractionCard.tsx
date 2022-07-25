import {
    ChangeEventHandler,
    FocusEventHandler,
    KeyboardEventHandler,
    useEffect,
    useRef,
} from "react";
import InteractionStatistics from "../../components/interactionStatistics/InteractionStatistics";
import ProgressBar from "../../components/progressBar/ProgressBar";
import WordProcessing from "../../components/wordProcessing/WordProcessing";
import {
    selectPracticePreparingState,
    selectPracticeProcessState,
    selectPracticeState,
    setCurrentCharChecking,
    setMaxTypingSpeed,
    setMistakesCount,
    setPracticeStatus,
} from "../../store/slices/practiceSlice/practiceSlice";
import PracticeStatus from "../../utils/enums/practiceStatus.enum";
import useAppDispatch from "../../utils/hooks/useAppDispatch";
import useAppSelector from "../../utils/hooks/useAppSelector";
import s from "./InputInteractionCard.module.scss";

interface IProps {}

const InputInteractionCard: React.FC<IProps> = () => {
    const progress = useRef(0);
    const dispatch = useAppDispatch();

    const { status } = useAppSelector(selectPracticeState);
    const { withAlwaysDisplayErrors } = useAppSelector(selectPracticePreparingState);
    const { text, currentCharChecking, mistakesCount, maxTypingSpeed } = useAppSelector(
        selectPracticeProcessState
    );

    useEffect(() => {
        dispatch(setCurrentCharChecking({ char: text[0], index: 0 }));
    }, []);

    const onHandleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        e.currentTarget.focus();
    };

    const onHandleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.currentTarget.value;
        checkAndСonfirmOrDeniedInputValue(value);
    };

    const checkAndСonfirmOrDeniedInputValue = (value: string) => {
        if (value[value.length - 1] === currentCharChecking.char) {
            if (currentCharChecking.index === text.length - 1) {
                dispatch(setPracticeStatus(PracticeStatus.FINISHED));
                return;
            }
            dispatch(
                setCurrentCharChecking({
                    char: text[currentCharChecking.index + 1],
                    index: currentCharChecking.index + 1,
                })
            );
            IncreaseProgress();
            return;
        }
        dispatch(setMistakesCount(mistakesCount + 1));
    };

    const IncreaseProgress = () => {
        progress.current = ((currentCharChecking.index + 1) / text.length) * 100;
    };

    const onBackspacePreventDefault: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Backspace") e.preventDefault();
    };

    const onHandleRestartClick = () => {
        dispatch(setPracticeStatus(PracticeStatus.PREPARING));
    };

    const onReachedNewMaxSpeed = (value: number) => {
        dispatch(setMaxTypingSpeed(value));
    };

    return (
        <div className={s.container}>
            <input
                className={s.input_hidden}
                onChange={onHandleChange}
                onBlur={onHandleBlur}
                onKeyDown={onBackspacePreventDefault}
                autoFocus={true}
            />
            <ProgressBar progress={progress.current} />
            <WordProcessing
                text={text}
                charCheckingIndex={currentCharChecking.index}
                mistakesCount={mistakesCount}
                alwaysDisplayWrongs={withAlwaysDisplayErrors}
            />
            <InteractionStatistics
                completeCount={currentCharChecking.index}
                mistakesCount={mistakesCount}
                onHandleRestartClick={onHandleRestartClick}
                onReachedNewMaxSpeed={onReachedNewMaxSpeed}
                maxSpeed={maxTypingSpeed}
            />
        </div>
    );
};

export default InputInteractionCard;
