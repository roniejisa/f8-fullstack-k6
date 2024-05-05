import './assets/output.css';
import img01 from "./assets/img/img01.jpg"
import moment from "moment";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import config from "./config.json";
console.log(config);
export const App = () => {
    return `
        ${Header()}
        <h2>Học lập trình không khó!</h2>
        <h1>Server API: ${config.SERVER_API}</h1>
        <h1>Title: ${config.WEB_TITLE}</h1>
        Thời gian: ${moment().format('dd mm YYYY')}
        <img src="${img01}" alt="Ảnh 1" />
        ${Footer()}
    `
}