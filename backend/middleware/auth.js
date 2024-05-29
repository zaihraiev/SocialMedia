const jwt = require("jsonwebtoken");

exports.authUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ error: "Invalid Authentication" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid Authentication" });
  }
};
