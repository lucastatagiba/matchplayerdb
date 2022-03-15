const jsonServer = require("json-server");

const router = jsonServer.router("./src/mock/db.json");

module.exports = router;
