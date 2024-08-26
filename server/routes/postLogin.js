const fs = require("fs");
const DATABASE = "../database/users.json";

module.exports = function (req, res) {
  const { email, pwd } = req.body;
  console.log(req.body);
  fs.readFile(DATABASE, "utf-8", function (error, data) {
    if (error) throw error;
    let userArr = JSON.parse(data);
    // console.log(userArr);

    let i = userArr.findIndex(
      (user) => user.password === pwd && user.email === email
    );
    if (i === -1) {
      res.send({ valid: false });
    } else {
      userArr[i].valid = true;
      console.log(userArr[i]);
      const { username, birthday, age, email, valid } = userArr[i];
      let validUserObj = {
        username,
        birthday,
        age,
        email,
        valid,
      };
      // console.log(validUserObj, "new");
      res.send(JSON.stringify(validUserObj));
      const stringifiedUsers = JSON.stringify(userArr);
      fs.writeFile(DATABASE, stringifiedUsers, "utf-8", function (err) {
        if (err) throw err;
      });
    }
  });
};
