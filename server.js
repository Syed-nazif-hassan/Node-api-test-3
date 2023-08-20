const express = require("express");
const router = require("./routes/routes");
const PORT = process.env.port || 2000;
const app = express();

app.use("/", router);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));