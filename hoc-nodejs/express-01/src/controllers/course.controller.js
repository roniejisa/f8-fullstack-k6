const { Op } = require("sequelize");
const { Course } = require("../models");

module.exports = {
    index: async (req, res) => {
        const { id, name, price } = req.query;

        const filter = {};
        if (id) {
            filter["id"] = {
                [Op.gt]: id,
            };
        }
        if (name || price) {
            if (!filter[Op.or]) {
                filter[Op.or] = {};
            }
        }
        if (name) {
            filter[Op.or]["name"] = {
                [Op.iLike]: `%${name}%`,
            };
        }

        if (price) {
            filter[Op.or]["price"] = {
                [Op.gte]: price,
            };
        }
        console.log(filter);
        const courses = await Course.findAll({
            // attributes: { exclude: "price" },
            order: [["id", "desc"]],
            where: filter,
        });
        res.json({ ...courses });
    },
    find: async (req, res) => {
        const { id } = req.params;
        const course = await Course.findOne({
            where: { id },
        });
        res.json({ course: course });
    },
    create: async (req, res) => {
        const body = req.body;
        const course = await Course.create(body);
        res.json(course);
    },
    update: async (req, res) => {
        const { id } = req.params;
        const body = req.body;
        const status = await Course.update(body, {
            where: {
                id,
            },
        });
        res.json(status);
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const status = await Course.destroy({
            where: {
                id,
            },
        });
        res.json(status);
    },
    deleteIds: async (req, res) => {
        const { ids } = req.body;
        const status = await Course.destroy({
            where: {
                id: {
                    [Op.in]: ids
                },
            },
        });
        res.json(status);
    },
};

//Viết route và action để xóa course theo nhiều id (id truyền lên bằng nhiều body)
