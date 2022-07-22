import axios from "axios";

const practiceAPI = {
    async getRussianText() {
        return axios.get<{ status: string; text: string }>("https://fish-text.ru/get");
    },
    async getEnglishText() {
        return axios.get<{ data: { content: string }[] }>(
            "https://fakerapi.it/api/v1/texts?_quantity=1&_characters=500"
        );
    },
};

export default practiceAPI;
