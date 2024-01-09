const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // username must be unique
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// pass + (info)  :    kjsdghsdihgkpsndgcakkfaoshiadvnadhfvajshdj
// pass + (information) :    agusdhfgsd;ghawehagnbvskaejdfalfldahfo;
