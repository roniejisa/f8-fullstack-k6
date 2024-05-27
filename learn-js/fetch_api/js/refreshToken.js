// const requestRefresh = async () => {
//     console.log("Request refresh token");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.random());
//         }, 1000);
//     });
// };
// let isExpired = false;
// let isHasToken = false;
// let token = false;
// let refreshTokenPromise = false;
// const requestApi = (url) => {
//     setTimeout(async () => {
//         // Giả sử khi gọi api /courses => Token bị hết hạn
//         if (url === "/courses" && !token) {
//             isExpired = true;
//         }
//         if (isExpired) {
//             if (!refreshTokenPromise) {
//                 refreshTokenPromise = requestRefresh();
//             }
//             const newToken = await refreshTokenPromise;
//             token = newToken;
//             console.log("Call API: " + url + "new token: " + token);
//         } else {
//             console.log("Call API: " + url + "myToken");
//         }
//     }, 1000);
// };

// requestApi("/courses");
// requestApi("/test");
// requestApi("/oke");

export const httpClient = {
    url: "",
    token: null,
    send: async function (
        url,
        method = "GET",
        body = null,
        headers = {},
        params = {}
    ) {
        const initialHeader = {
            "Content-Type": "application/json",
        };
        // try {
        if (this.token) {
            initialHeader.Authorization = `Bearer ${this.token}`;
        }
        const options = {
            method,
            headers: { ...initialHeader, ...headers },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }
        if (params) {
            this.url += url + "?" + new URLSearchParams(params).toString();
        }

        const response = await fetch(url, options);
        const data = await response.json();
        // if (!response.ok) {
        //     throw new Error(response.statusText);
        // }
        return { response, data };
        // } catch (e) {}
    },
    get: function (url, params = {}, headers = {}) {
        return this.send(url, "GET", null, headers, params);
    },
    post: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "POST", body, headers, params);
    },
    put: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "PUT", body, headers, params);
    },
    patch: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "PATCH", body, headers, params);
    },
    delete: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "DELETE", body, headers, params);
    },
};
