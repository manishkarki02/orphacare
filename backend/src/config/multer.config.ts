import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const timestamp = date.getTime();
    const extension = path.extname(file.originalname);
    const imageName = `${timestamp}${extension}`;
    cb(null, imageName);
  },
});

export const upload = multer({ storage: storage });
