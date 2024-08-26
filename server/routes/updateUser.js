const fs = require("fs");
const DATABASE = "../database/users.json";

module.exports = function (req, res) {
  if (!req.body.UUID) {
    res.send({ error: "NO ID" });
  }
  console.log(req.body);
  fs.readFile(DATABASE, "utf-8", function (error, data) {
    if (error) throw error;
    let userArr = JSON.parse(data);
    // console.log(userArr);

    let i = userArr.findIndex((user) => user.UUID === req.body.UUID);
    if (i === -1) {
      res.send({ error: "ID cant be found" });
    } else {
      userArr[i] = { ...userArr[i], ...req.body };
      const { username, birthday, age, email, valid, UUID } = userArr[i];
      let validUserObj = {
        username,
        birthday,
        age,
        email,
        valid,
        UUID,
      };
      console.log(validUserObj, "new");
      res.send(JSON.stringify(validUserObj));
      const stringifiedUsers = JSON.stringify(userArr);
      fs.writeFile(DATABASE, stringifiedUsers, "utf-8", function (err) {
        if (err) throw err;
      });
    }
  });
};
