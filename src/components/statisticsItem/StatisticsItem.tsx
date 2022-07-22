import SvgIcon from "../../utils/svg/svgIcon.enum";
import SvgSelector from "../../utils/svg/SvgSelector";
import s from "./StatisticsItem.module.scss";

interface IProps {
    iconName: SvgIcon;
    name: string;
    value: number | string;
    unit: string;
}

const StatisticsItem: React.FC<IProps> = ({ iconName, name, unit, value }) => {
    return (
        <div className={s.container}>
            <div className={s.icon}>
                <SvgSelector iconName={iconName} color="#ffffff" />
            </div>
            <div className={s.statistics_info}>
                <span className={s.name}>{name}</span>
                <span className={s.value}>{`${value}${unit}`}</span>
            </div>
        </div>
    );
};

export default StatisticsItem;
