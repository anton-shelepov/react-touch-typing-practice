import s from "./ButtonTransparentWithIcon.module.scss";

interface IProps {
    value: string;
    color?: string;
}

const ButtonTransparentWithIcon: React.FC<IProps> = ({ value, ...styles }) => {
    return (
        <button style={{ ...styles }} className={s.rounded_button}>
            {value}
        </button>
    );
};

export default ButtonTransparentWithIcon;
