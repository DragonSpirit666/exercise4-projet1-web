require("dotenv").config();

const express = require("express");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT;
const apiRouter = require("./routes/api");

app.use(helmet());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
