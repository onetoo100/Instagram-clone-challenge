const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PublicationsSchema = new Schema(
  {
    imagen: {
      type: String,
      required: true,
      trim: true,
    },
    texto: {
      type: String,
      trim: true,
    },
    likes: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

PublicationsSchema.methods.toJSON = function () {
  const { __v, ...rest } = this.toObject();
  return rest;
};

module.exports = mongoose.model("Publications", PublicationsSchema);
