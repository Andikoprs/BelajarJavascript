const express = require("express");
const app = express();
const port = 3000;

const routes = require("./src/app/route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** ROUTES */
app.use("/api/", routes);

/** DB CONNECTION */
require("./connection");

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
