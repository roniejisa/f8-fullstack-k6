export const httpClient = {
    baseUrl: "",
    token: null,
    refreshTokenPromise: null,
    send: async function (url, method = "GET", body = null, headers = {}) {
        let response = {};
        if (!this.baseUrl) {
            throw new Error("Vui lòng cập nhật baseUrl");
        }
        // Kiểm tra có phải refresh hay không ở chỗ này!
        const initialHeader = {
            "Content-Type": "application/json",
        };
        let newUrl = this.baseUrl;
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
            const result = await response.json();
            if (headers.isRefresh) {
                return { response, result };
            }
            if (!response.ok) {
                throw new Error(result?.message);
            }
            return { response, result };
        } catch (e) {
            // Lưu vào Storage
            if (!this.refreshTokenPromise) {
                this.refreshTokenPromise = this.getRefreshToken();
            }
            const newToken = await this.refreshTokenPromise;
            if (!newToken) {
                return response;
            }
            this.token = newToken.data.access_token;
            // Gọi lại request bị failed
            return this.send(url, method, body, headers);
            // Xử lý cấp lại accessToken khi hết hạn
            // throw new Error(e.message);
        }
    },
    getRefreshToken: async function () {
        try {
            const { refresh_token } = JSON.parse(localStorage.getItem("token"));
            const { response, result: tokens } = await this.post(
                "/auth/refresh-token",
                { refreshToken: refresh_token },
                {
                    isRefresh: true,
                }
            );
            if (!response.ok) {
                throw new Error("Refresh token không hợp lệ");
            }
            localStorage.setItem("token", JSON.stringify(tokens.data));
            return tokens;
        } catch (e) {
            localStorage.removeItem("token");
            return false;
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
