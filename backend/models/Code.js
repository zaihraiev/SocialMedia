const mognoose = require("mongoose");

const { ObjectId } = mognoose.Schema;

const codeSchema = new mognoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mognoose.model("Code", codeSchema);
