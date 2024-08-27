module.exports = {
    successResponse: (res, data, status = 200, message = "OK") => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        return res.status(status).json({
            success: true,
            data,
            message,
        });
    },
    errorResponse: (res, errors = {}, message = "Đã có lỗi xảy ra", status = 400) => {
        return res.status(status).json({
            success: false,
            errors,
            message,
            status,
        });
    },
};
