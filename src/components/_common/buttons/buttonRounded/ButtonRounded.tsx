import s from "./ButtonRounded.module.scss";

interface IProps {
    buttonText: string;
    onClick: () => void;
}

const ButtonRounded: React.FC<IProps> = ({ buttonText, onClick }) => {
    return (
        <button className={s.button} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default ButtonRounded;
