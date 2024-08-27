const { object, string } = require("yup");
const { User, Phone, Post } = require("../models");
const { successResponse, errorResponse } = require("../utils/response");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { make } = require("../utils/hash");

module.exports = {
    create: async (req, res) => {
        const schema = object({
            fullname: string().required("Tên bắt buộc phải nhập"),
            email: string()
                .email("Không đúng định dạng email")
                .required("Vui lòng nhập email!")
                .test("checkEmails", "Tài khoản đã tồn tại", async (value) => {
                    const user = await User.findOne({
                        where: {
                            email: value,
                        },
                    });
                    if (user) {
                        return false;
                    }
                    return true;
                }),
            password: string().required("Vui lòng nhập mật khẩu").min(6, "Ít nhất phải có 6 ký tự trở lên"),
            status: string().test("checkStatus", "Trạng thái không hợp lệ", (value) => {
                return value === "on" || value === undefined;
            }),
        });
        try {
            const body = await schema.validate(req.body, {
                abortEarly: false,
            });
            // Mã hóa mật khẩu
            // - Hàm mã hóa 1 chiều: md5, sha1,...
            // - Hàm băm: bcrypt, argon2, scrypt,... --> hashing
            body.password = make(body.password);

            const user = await User.create(body);
            return successResponse(res, user, 200, "Tạo user thành công");
        } catch (e) {
            const errors = e.inner.reduce((initial, { path, errors }) => {
                initial[path] = errors[0];
                return initial;
            }, {});
            return errorResponse(res, errors, "Tạo user không thành công", 400);
        }
    },
    findAll: async (req, res) => {
        const { _sort, sortType, _limit = 10, _page = 1 } = req.query;
        const filters = {};
        const orders = [];
        if (_sort && (sortType.includes("desc") || sortType.includes("asc"))) {
            orders.push([_sort, sortType]);
        }
        orders.push(["id", "ASC"]);

        const _offset = (_page - 1) * _limit;
        const user = await User.findAll({
            order: orders,
            where: {
                ...filters,
            },
            limit: _limit,
            offset: _offset,
        });
        return successResponse(res, user, 200, "Lấy dữ liệu thành công");
    },
    findOne: async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({
                where: {
                    id,
                },
            });
            if (!user) {
                return next();
            }
            return successResponse(res, user, 200, "success");
        } catch (e) {
            next();
        }
    },
    delete: async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({
                where: { id },
            });

            if (!user) {
                return next();
            }

            return successResponse(res, undefined, 200, "Delete Success");
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        const { id } = req.params;

        const user = await User.findOne({
            where: {
                id,
            },
        });
        if (!user) {
            return next();
        }

        const schema = object({
            fullname: string(),
            email: string()
                .email("Không đúng định dạng email")
                .test("checkEmails", "Tài khoản đã tồn tại", async (value) => {
                    const user = await User.findOne({
                        where: {
                            email: value,
                            id: {
                                [Op.not]: id,
                            },
                        },
                    });
                    if (user) {
                        return false;
                    }
                    return true;
                }),
            password: string().test("checkLenghPass", "Mật khẩu phải có từ 6 ký tự trở lên", (value) => {
                if (value.length < 6) {
                    return false;
                }
                return true;
            }),
            status: string().test("checkStatus", "Trạng thái không hợp lệ", (value) => {
                return value === "on" || value === undefined;
            }),
        });
        try {
            const body = await schema.validate(req.body, {
                abortEarly: false,
            });
            if (body.password) {
                body.password = make(body.password);
            }
            if (body.status !== "on") {
                body.status = false;
            }
            const updateData = await User.update(body, {
                where: {
                    id,
                },
            });

            return successResponse(
                res,
                {
                    data: { ...user.toJSON(), ...body },
                },
                200,
                "Cập nhật tài khoản thành công"
            );
        } catch (e) {
            const errors = e.inner.reduce((initial, { path, errors }) => {
                initial[path] = errors[0];
                return initial;
            }, {});
            console.log(errors);
            return errorResponse(res, errors, "Cập nhật tài khoản không thành công", 400);
        }
    },
};
