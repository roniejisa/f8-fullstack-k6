export const httpClient = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
    body: object = {},
    headers: object = {}
) => {
    const params: any = {
        method: method,
    };
    if (method === "POST" || method === "PATCH" || method === "PUT") {
        params.body = JSON.stringify(body);
    }
    return fetch(process.env.API_SERVER + url, {
        headers: {
            "x-api-key": "f8-traning",
            "Content-Type": "application/json",
            ...headers,
        },
        cache: "no-cache",
        ...params,
    });
};
