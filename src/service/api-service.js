import axios from "axios";

const api = {
    key: "c09825cc1b4321cdf11c8abaf050b4d9",
    base: "https://api.openweathermap.org/data/2.5",
}

export function loadApi(props) {

    if(props !== undefined) {
            const url = api.base + "/weather?lat=" + props.lat
                + "&lon=" + props.long + "&appid=" + api.key + "&units=metric";
            return axios.get(url).then((result) => result.data)


    }
}
