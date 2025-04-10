import express from "express";

import mongoose from "mongoose";

import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://devhouse:devhouse@cluster0.yifjzbl.mongodb.net/devhouse?retryWrites=true&w=majority&appName=Cluster0"
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
