const sharp = require("sharp");
const path = require("path");

const helperImage = (filePath, fileName, size = 300) => {
  const dest = path.resolve(__dirname, "..", "public", "optmize-uploads");
  try {
    return sharp(filePath)
      .resize(size) // width resize
      .toFile(`${dest}/${fileName}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  helperImage,
};
