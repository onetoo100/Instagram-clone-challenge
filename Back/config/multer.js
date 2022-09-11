const multer = require("multer");
const path = require("path");

module.exports = {
  dest: path.resolve(__dirname, "..", "public", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      try {
        file.mimetype.includes("mp4")
          ? callBack(
              null,
              path.resolve(__dirname, "..", "public", "uploads-videos")
            )
          : callBack(null, path.resolve(__dirname, "..", "public", "uploads"));
      } catch (error) {}
    },
    filename: (req, file, callBack) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      callBack(null, `${Date.now()}-${name}${ext}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, callBack) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
      "video/mp4",
    ];

    if (allowedMimes.includes(file.mimetype)) callBack(null, true);
    else callBack(new Error("Invalid file type"));
  },
};
