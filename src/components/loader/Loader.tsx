import SvgIcon from "../../utils/svg/svgIcon.enum";
import SvgSelector from "../../utils/svg/SvgSelector";
import s from "./Loader.module.scss";

interface IProps {}

const Loader: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <SvgSelector iconName={SvgIcon.LOADER} />
        </div>
    );
};

export default Loader;
