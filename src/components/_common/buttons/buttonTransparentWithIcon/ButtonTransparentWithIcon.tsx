import SvgIcon from "../../../../utils/svg/svgIcon.enum";
import SvgSelector from "../../../../utils/svg/SvgSelector";
import s from "./ButtonTransparentWithIcon.module.scss";

interface IProps {
    value: string;
    iconName: SvgIcon;
    color?: string;
}

const ButtonTransparentWithIcon: React.FC<IProps> = ({ value, iconName, ...styles }) => {
    return (
        <button style={{ ...styles }} className={s.rounded_button}>
            <SvgSelector iconName={iconName} color={styles.color} />
            {value}
        </button>
    );
};

export default ButtonTransparentWithIcon;
