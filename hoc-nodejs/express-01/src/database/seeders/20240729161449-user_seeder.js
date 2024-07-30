"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    fullname: "Minh Hiếu",
                    password: "12345",
                    email: "roniejisa@gmail.com",
                    address: "Hanoi",
                    status: true,
                },
                {
                    fullname: "Hoàng An",
                    password: "123456",
                    address: "Hanoi",
                    email: false,
                    email: "an@gmail.com",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("users", null, {
            truncate: true,
            reset,
        });
    },
};
