import s from "./Header.module.scss";

interface IProps {}

const Header: React.FC<IProps> = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h1 className={s.title}>Тренажер слепой печати</h1>
            </div>
        </div>
    );
};

export default Header;
