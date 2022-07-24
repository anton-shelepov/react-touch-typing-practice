import Loader from "../../../components/loader/Loader";
import LoadingStatus from "../../../utils/enums/loadingStatus.enum";
import PracticeStatus from "../../../utils/enums/practiceStatus.enum";
import useAppSelector from "../../../utils/hooks/useAppSelector";
import InputInteractionCard from "../../inputInteractionCard/InputInteractionCard";
import PracticePreparingCard from "../../practicePreparingCard/PracticePreparingCard";
import PracticeResultCard from "../../practiceResultCard/PracticeResultCard";
import s from "./PracticePage.module.scss";

const PracticePage: React.FC = () => {
    const {
        loading,
        status,
        process: { text },
    } = useAppSelector((state) => state.practice);

    return (
        <div className={s.container}>
            {loading === LoadingStatus.PENDING ? (
                <Loader />
            ) : (
                (status === PracticeStatus.PREPARING && <PracticePreparingCard />) ||
                (status === PracticeStatus.PROCESSING && <InputInteractionCard text={text} />) ||
                (status === PracticeStatus.FINISHED && <PracticeResultCard />)
            )}
        </div>
    );
};

export default PracticePage;
