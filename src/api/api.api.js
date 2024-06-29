import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://tuhentai.onrender.com/animes",
});

export const getAllAnimes = () => baseURL.get();
