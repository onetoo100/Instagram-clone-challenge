const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
const http = require("http");

class Server {
  constructor() {
    this.app = express();
    this.port = normalizePort(process.env.PORT || "3000");
    this.server = http.createServer(this.app);

    this.paths = {
      publications: "/api/publications",
    };

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(
      this.paths.publications,
      require("../routes/publications-router")
    );
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  async connectDB() {
    await dbConnection();
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on the port: ${this.port}`);
    });
    this.server.on("error", onError);
  }
}

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") throw error;

  const bind = this.port === undefined && "This port";

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already is use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

module.exports = Server;
