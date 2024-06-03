const User = require("../models/User");
const Code = require("../models/Code");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
const { sendVerificationEmail, sendResetCode } = require("../helpers/mailer");
const jwt = require("jsonwebtoken");
const generateCode = require("../helpers/generateCode");

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
  try {
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
  } catch (error) {
    return res.status(400).json({ message: error.message });
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

exports.sendVerification = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.verified == true) {
      return res.status(400).json({
        message: "This account is already activated",
      });
    }

    const emailVerificationToken = generateToken(
      { id: user._id.toString() },
      "30m",
    );

    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    await sendVerificationEmail(user.email, user.first_name, url);

    return res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      return res.status(400).json({
        message: "Account does not exists.",
      });
    }
    return res.status(200).json({
      email: user.email,
      picture: user.picture,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sendResetPasswordCode = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).select("-password");
    await Code.findOneAndDelete({ user: user._id });
    const code = generateCode(5);
    const savedCode = await new Code({
      user: user._id,
      code: code,
    }).save();

    await sendResetCode(user.email, user.first_name, code);
    return res.status(200).json({
      message: "Code has been sent to your email",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.validateCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });
    const codeObj = await Code.findOne({ user: user._id });

    if (codeObj.code !== code) {
      return res.status(400).json({
        message: "Verification code is wrong.",
      });
    }

    return res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.changePassword = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const cryptedPassword = await bcrypt.hash(password, 12);
  await User.findByIdAndUpdate(user._id, { password: cryptedPassword });

  return res.status(200).json({
    message: "Password has been changed",
  });
};
