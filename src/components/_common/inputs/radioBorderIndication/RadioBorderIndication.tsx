import classNames from "classnames";
import { FormEventHandler } from "react";
import s from "./RadioBorderIndication.module.scss";

interface IProps {
    checked?: boolean;
    name: string;
    label: string;
    value: string;
    onChange: FormEventHandler<HTMLInputElement>;
}

const RadioBorderIndication: React.FC<IProps> = ({ label, ...restProps }) => {
    const containerClasses = classNames(s.container, restProps.checked ? s.active : undefined);
    return (
        <label className={containerClasses}>
            <span className={s.title}>{label}</span>
            <input {...restProps} type="radio" />
        </label>
    );
};

export default RadioBorderIndication;
