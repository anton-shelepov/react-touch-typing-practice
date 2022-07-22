import mainLogo from "../../assets/images/main-logo.png";
import s from "./Header.module.scss";

interface IProps {}

const Header: React.FC<IProps> = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img className={s.main_logo} src={mainLogo} />
                <h1 className={s.title}>Тренажер слепой печати...</h1>
            </div>
        </div>
    );
};

export default Header;
