const fs = require("fs");
const DATABASE = "../database/users.json";

module.exports = function (req, res) {
  fs.readFile(DATABASE, "utf-8", function (error, data) {
    if (error) throw error;
    let userArr = JSON.parse(data);
    console.log(userArr);

    let i = userArr.findIndex((user) => user.UUID === Number(req.body.data));
    if (i === -1) {
      res.send({ error: "ID cant be found" });
    } else {
      userArr[i].valid = false;

      res.send({ message: "Logged Out Sucessfuly" });
      const stringifiedUsers = JSON.stringify(userArr);
      fs.writeFile(DATABASE, stringifiedUsers, "utf-8", function (err) {
        if (err) throw err;
      });
    }
  });
};
