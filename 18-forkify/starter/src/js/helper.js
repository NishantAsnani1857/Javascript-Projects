import { TIMEOUT_TIME } from "./config";


const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};


export const getJSON = async (url) => {
    try {
        const fetchPro = await fetch(url)
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_TIME)])

        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} ${res.status}`)

        return data;
    }
    catch (err) {
        throw err
    }
}