export const getProducts = async (page = 1, abortControllerRef) => {
    if (abortControllerRef.current) {
        abortControllerRef.current.abort(); // Hủy request trước đó nếu còn đang xử lý
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const limit = 20;
    const response = await fetch(import.meta.env.VITE_API_URL + `/products?page=${page}&limit=${limit}`, {
        signal: abortController.signal,
    });
    if (!response.ok) return false;
    const data = await response.json();
    return data;
};

export const getProduct = async (id = 1) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {});
    if (!response.ok) return false;
    const data = await response.json();
    return data;
};
