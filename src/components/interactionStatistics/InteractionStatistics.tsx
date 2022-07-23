import SvgIcon from "../../utils/svg/svgIcon.enum";
import ButtonTransparentWithIcon from "../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import AccuracyStatistics from "./accuracyStatistics/AccuracyStatistics";
import s from "./InteractionStatistics.module.scss";
import SpeedStatistics from "./speedStatistics/SpeedStatistics";
import TimeStatistics from "./timeStatistics/TimeStatistics";

interface IProps {
    mistakesCount: number;
    textLength: number;
    completedCount: number;
}

const InteractionStatistics: React.FC<IProps> = ({ mistakesCount, textLength, completedCount }) => {
    const totalInputsCount = mistakesCount + completedCount;
    return (
        <div className={s.container}>
            <div className={s.statistics}>
                <SpeedStatistics />
                <AccuracyStatistics
                    mistakesCount={mistakesCount}
                    totalInputsCount={totalInputsCount}
                />
                <TimeStatistics />
            </div>
            <div className={s.buttons}>
                <ButtonTransparentWithIcon
                    value="Начать заново"
                    color="white"
                    iconName={SvgIcon.RESTART}
                />
            </div>
        </div>
    );
};

export default InteractionStatistics;
