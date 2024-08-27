export const fetcher = async ({ url, method = "GET", headers = {}, body = null }) => {
    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }
    return fetch(url, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
};
