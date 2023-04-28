import axios from "axios";
const client = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"});

export default class ApiServices {
    static fetchUserData() {
        return client.get("/posts")as any;
    }
}

export type ResponseFetchUsers = {
    title: string;
    body: string;
    userId: number;
    id: number;
};