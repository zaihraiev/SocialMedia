const User = require("../models/User");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail } = require("../helpers/mailer");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    username,
    bYear,
    bMonth,
    bDay,
    gender,
  } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({
      message: "Invalid email",
    });
  }

  const check = await User.findOne({ email });

  if (check) {
    return res.status(400).json({
      message: "The email is already registered",
    });
  }

  if (!validateLength(first_name, 3, 30)) {
    return res.status(400).json({
      message: "first name must be between 3 and 30 characters",
    });
  }

  if (!validateLength(last_name, 3, 30)) {
    return res.status(400).json({
      message: "last name must be between 3 and 30 characters",
    });
  }

  if (!validateLength(password, 6, 40)) {
    return res.status(400).json({
      message: "password must be between 6 and 40 characters",
    });
  }

  const cryptedPassword = await bcrypt.hash(password, 12);

  let tempUserName = first_name + last_name;
  let newUserName = await validateUsername(tempUserName);

  const user = await new User({
    first_name,
    last_name,
    email,
    password: cryptedPassword,
    username: newUserName,
    bYear,
    bMonth,
    bDay,
    gender,
  }).save();

  const emailVerificationToken = generateToken(
    { id: user._id.toString() },
    "30m",
  );
  const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
  await sendVerificationEmail(user.email, user.first_name, url);
  const token = generateToken({ id: user._id.toString() }, "7d");
  res.send({
    id: user._id,
    username: user.username,
    picture: user.picture,
    first_name: user.first_name,
    last_name: user.last_name,
    token: token,
    verified: user.verified,
    message: "Register success, please verify your email",
  });
};

exports.activateAccount = async (req, res) => {
  const { token } = req.body;
  const user = jwt.verify(token, process.env.JWT_SECRET);
  const check = await User.findById(user.id);
  if (check.verified == true) {
    return res.status(400).json({
      message: "this email is already activated",
    });
  } else {
    await User.findByIdAndUpdate(user.id, { verified: true });
    return res.status(200).json({ message: "Account activated" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  } else {
    let passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Login success",
    });
  }
};
