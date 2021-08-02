const express = require("express");
const { Product } = require("../../models/product");
const multer = require("multer");

const { auth } = require("../../middleware/auth");

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // 이미지 파일을 루트 폴더의 uploads 폴더에 저장
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // 파일 이름 정의
    // 날짜_파일 이름 으로 저장
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    // jpg, png 파일만 저장 가능하도록 필터링
    const ext = path.extname(file.originalname);

    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }

    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

///////////////////////////////////////////////
//              Product Router
///////////////////////////////////////////////

// Upload Image
// 서버의 multer library에 이미지 저장
router.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {
    if (err) return res.json({ success: false, err });

    return res.json({
      success: true,
      image: res.req.file.path,
      filename: res.req.file.filename,
    });
  });
});

// Upload Product
// POST
router.post("/uploadProduct", (req, res) => {
  const product = new Product(req.body);

  product.save((err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({ success: true });
  });
});

// Get Product By Id
// GET
router.get("/products_by_id", (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === "array") {
  }

  Product.find({ _id: { $in: productIds } })
    .populatae("writer")
    .exec((err, product) => {
      if (err) return res.status(400).send(err);

      return res.status(200).send(product);
    });
});

module.exports = router;
