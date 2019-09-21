import axios from "axios";

export default class AnimalService {
    static getListData() {
        return axios.get('https://localhost:44314/animal/search')
    };
}