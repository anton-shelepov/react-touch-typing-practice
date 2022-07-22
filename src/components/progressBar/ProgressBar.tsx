import s from "./ProgressBar.module.scss";

interface IProps {
    progress: number;
}

const ProgressBar: React.FC<IProps> = ({ progress }) => {
    return <div className={s.progress} style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
