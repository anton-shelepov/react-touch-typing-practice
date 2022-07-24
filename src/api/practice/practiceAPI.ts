import axios from "axios";

const practiceAPI = {
    async getRussianText() {
        return axios.get<{ status: string; text: string }>("https://fish-text.ru/get", {
            params: {
                // Количество запрашиваемых предложений
                type: "sentence",
                number: 2,
            },
        });
    },
    async getEnglishText() {
        return axios.get<{ data: { content: string }[] }>("https://fakerapi.it/api/v1/texts", {
            params: {
                // Количество запрашиваемых символов
                _quantity: 1,
                _characters: 350,
            },
        });
    },
};

export default practiceAPI;
