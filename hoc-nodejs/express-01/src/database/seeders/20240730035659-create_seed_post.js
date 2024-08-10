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

        await queryInterface.bulkInsert("posts", [
            {
                title: "Post 1",
                user_id: 1,
            },
            {
                title: "Post 2",
                user_id: 2,
            },
            {
                title: "Post 3",
                user_id: 1,
            },
            {
                title: "Post 4",
                user_id: 2,
            },
            {
                title: "Post 5",
                user_id: 1,
            },
            {
                title: "Post 6",
                user_id: 1,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
