const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const http = require("http").Server(app);
//deal with cors errors
app.use(cors());
app.use(express.json());
//also deals with cors errors and handles json formatting
app.use(express.urlencoded({ extended: true }));

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.post("/api/auth", require("./routes/postLogin"));
app.post("/api/auth/update", require("./routes/updateUser"));
app.post("/api/auth/logout", require("./routes/logoutUser"));
