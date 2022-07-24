import s from "./CheckboxStyled.module.scss";

interface IProps {
    label: string;
    onChange: () => void;
    checked: boolean;
}

const CheckboxStyled: React.FC<IProps> = ({ label, ...restProps }) => {
    return (
        <label className={s.container}>
            <input {...restProps} type="checkbox"></input>
            <span className={s.mark}></span>
            <span className={s.title}>{label}</span>
        </label>
    );
};

export default CheckboxStyled;
