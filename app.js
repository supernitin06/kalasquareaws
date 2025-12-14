import express from "express";
import cors from "cors";
import initDB from "./db/init.js";
import userRoutes from "./module/user/user.route.js";
initDB();
const app = express();

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/landing", songRoute);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

export default app;
