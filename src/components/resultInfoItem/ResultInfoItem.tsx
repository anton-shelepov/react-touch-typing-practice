import SvgIcon from "../../utils/svg/svgIcon.enum";
import SvgSelector from "../../utils/svg/SvgSelector";
import s from "./ResultInfoItem.module.scss";

interface IProps {
    iconName: SvgIcon;
    resultItemName: string;
    value: string | number;
}

const ResultInfoItem: React.FC<IProps> = ({ iconName, resultItemName, value }) => {
    return (
        <div className={s.container}>
            <div className={s.block_left}>
                <SvgSelector color="#da6952" iconName={iconName} />
                <span className={s.result_name}>{resultItemName}</span>
            </div>
            <div className={s.block_right}>
                <span className={s.value}>{value}</span>
            </div>
        </div>
    );
};

export default ResultInfoItem;
