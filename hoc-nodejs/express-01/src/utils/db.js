const postgres = require("postgres");

module.exports = postgres({
  host                 : '127.0.0.1',            // Postgres ip address[s] or domain name[s]
  port                 : 5123,          // Postgres server port[s]
  database             : 'test_db',            // Name of database to connect to
  username             : 'postgres',            // Username of database user
  password             : '1234',            // Password of database user
})