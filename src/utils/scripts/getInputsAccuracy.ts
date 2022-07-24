// Точность рассчитывается как соотношение общего количества введенных символов (включая ошибки)
// к количеству ошибок, при каждом повторном совершении неверного ввода, количество ошибок увеличивается
const getInputsAccuracy = (mistakesCount: number, totalInputsCount: number) => {
    return (100 - (mistakesCount / (totalInputsCount || 1)) * 100).toFixed(2);
};

export default getInputsAccuracy;
