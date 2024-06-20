export const clearCache = (tag) => {
    fetch(process.env.NEXT_PUBLIC_APP_URL + "/api/clear-cache", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ tag: "todo-list" }),
    });
};