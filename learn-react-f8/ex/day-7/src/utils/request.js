export const requestClient = {
    baseUrl: "",
    token: null,
    refreshToken: null,
    send: async function (url, method = "GET", body = null, headers = {}) {
        if (this.baseUrl) {
            throw new Error("Vui lòng cập nhật baseUrl");
        }
        const initialHeader = {
            "Content-Type": "application/json",
        };
        let newUrl = this.url;
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
        newUrl = newUrl + url;
        try {
            const response = await fetch(newUrl, options);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const result = await response.json();
            return { response, result };
        } catch (e) {
            const newToken = await this.getRefreshToken();
            this.token = newToken.access_token;
            // Xử lý cấp lại accessToken khi hết hạn
            // throw new Error(e.message);
        }
    },
    getRefreshToken: async function () {
        try {
            const { refresh_token } = JSON.parse(localStorage.getItem("token"));
            if (!this.refreshToken) {
                this.refreshToken = this.requestClient.post("/refresh-token", { refresh_token });
            }
            const { response, data: tokens } = await this.refreshToken;
            if (!response.ok) {
                throw new Error("Refresh token không hợp lệ");
            }
            return tokens;
        } catch (e) {
            console.log(e);
        }
    },
    get: function (url, headers = {}) {
        return this.send(url, "GET", null, headers);
    },
    post: function (url, body = {}, headers = {}) {
        return this.send(url, "POST", body, headers);
    },
    put: function (url, body = {}, headers = {}) {
        return this.send(url, "PUT", body, headers);
    },
    patch: function (url, body = {}, headers = {}) {
        return this.send(url, "PATCH", body, headers);
    },
    delete: function (url, body = {}, headers = {}) {
        return this.send(url, "DELETE", body, headers);
    },
};
