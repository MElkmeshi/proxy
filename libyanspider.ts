import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 8888;
const API_SERVICE_URL = "http://localhost:3002";
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api", (req, res) => {
  res.send("Hello World! API");
});
app.use((req, res, next) => {
  next();
});
app.use(
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);
app.listen(PORT, () => {
  console.log(`Starting Proxy at http://localhost:${PORT}`);
});
