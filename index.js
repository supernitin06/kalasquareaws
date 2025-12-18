import http from "http";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT =  process.env.PORT;

http.createServer(app).listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("CI/CD Test Deployment");
  console.log("CI/CD Test3 Deployment");
  console.log("CI/CD Test 4Deployment");
});

