const express = require("express");
const router = express.Router();
const User = require("../model/users");

router.post("/", (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  User.count({}, function(err, result) {
    if (err) {
      console.log(err);
    } else if (result === 0) {
      console.log(result);
      user.role = "admin";
      user
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    } else {
      user.role = "users";
      user
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));


    }
  });

  res.send('Save data successfully!');
});

module.exports = router;
