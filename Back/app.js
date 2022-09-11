require("dotenv").config();
const Server = require("./bin/server");
const server = new Server();
server.listen();
