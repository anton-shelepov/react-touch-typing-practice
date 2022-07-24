import SvgIcon from "../../utils/svg/svgIcon.enum";
import SvgSelector from "../../utils/svg/SvgSelector";
import s from "./ResultInfoItem.module.scss";

export interface IResultInfoItemProps {
    iconName: SvgIcon;
    resultItemName: string;
    value: string | number;
    unit?: string | number;
}

const ResultInfoItem: React.FC<IResultInfoItemProps> = ({
    iconName,
    resultItemName,
    value,
    unit = "",
}) => {
    return (
        <div className={s.container}>
            <div className={s.block_left}>
                <SvgSelector color="#da6952" iconName={iconName} />
                <span className={s.result_name}>{resultItemName}</span>
            </div>
            <div className={s.block_right}>
                <span className={s.value}>{`${value}${unit}`}</span>
            </div>
        </div>
    );
};

export default ResultInfoItem;
