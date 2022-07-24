import { CSSProperties } from "react";
import s from "./CheckboxStyled.module.scss";

interface IProps {
    label: string;
    onChange: () => void;
    checked: boolean;
    style?: CSSProperties;
}

const CheckboxStyled: React.FC<IProps> = ({ label, style, ...restProps }) => {
    return (
        <label className={s.container} style={style}>
            <input {...restProps} type="checkbox"></input>
            <span className={s.title}>{label}</span>
        </label>
    );
};

export default CheckboxStyled;
