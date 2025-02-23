import { config } from "dotenv";
config();
import express from "express";

export const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (request, response) => {
    response.status(200).send({
      message: "Hello world",
    });
  });

  return server;
};
