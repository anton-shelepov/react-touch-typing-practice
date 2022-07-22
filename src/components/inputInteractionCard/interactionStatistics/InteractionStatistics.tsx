import ButtonTransparentWithIcon from "../../_common/buttons/buttonTransparentWithIcon/ButtonTransparentWithIcon";
import s from "./InteractionStatistics.module.scss";

interface IProps {}

const InteractionStatistics: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <span>Скорость 12 зн/мин</span>
            <span>Точность 96.5%</span>
            <ButtonTransparentWithIcon value="Начать заново" color="white" />
        </div>
    );
};

export default InteractionStatistics;
