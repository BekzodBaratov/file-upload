const multer = require("multer");
const File = require("../model/fileModel");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

// git remote add origin git@github.com:BekzodBaratov/file-upload.git

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${
      Date.now() - Math.round(Math.random()) * 1e9
    }${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: {
    fieldSize: 1000000 * 100,
  },
}).single("mylife");

const fileUpload = (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        res.status(404).json({
          status: "failed",
        });
      }

      const file = await File.create({
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        uuid: uuidv4(),
      });
      res.status(201).json({
        fileUrl: `${process.env.APP_URL}/files/${file.uuid}`,
      });
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      error,
    });
  }
};
module.exports = { fileUpload };
