export const loginRequest = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const token = await response.json();
    if (!response.ok) {
        return false;
    }
    return token;
};
