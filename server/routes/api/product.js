const express = require('express');
const { Product } = require('../../models/product');
const { Like } = require('../../models/Like');
const multer = require('multer');

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    if (ext !== '.jpg' || ext !== '.png') {
      return cb(res.status(400).end('only jpg, png are allowed'), false);
    }

    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');

///////////////////////////////////////////////
//              Product Router
///////////////////////////////////////////////

// Get Products
router.get('/getProducts', async (req, res) => {
  try {
    const products = await Product.find();

    if (!products)
      return res
        .status(400)
        .json({ success: false, msg: '상품이 존재하지 않습니다.' });

    res.status(200).json({ success: true, products });
  } catch (e) {
    console.log(e);
  }
});

// Upload Image
// 서버의 multer library에 이미지 저장
router.post('/uploadImage', (req, res) => {
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
router.post('/uploadProduct', (req, res) => {
  console.log(req.body);

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
router.get('/products_by_id', async (req, res) => {
  try {
    const product = await Product.findById(req.query.id).populate('writer');

    console.log(product);

    return res.status(200).send(product.images);
  } catch (e) {
    console.error(e);
  }
});

///////////////////////////////////////////////
//                   Like
///////////////////////////////////////////////

router.post('/:id/like/uplike', async (req, res) => {
  try {
    let { productId, userId } = req.body;
    const newLike = await Like.create({
      userId,
      productId,
    });
    return res.status(200).json({ upLike: true });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ upLike: false, e });
  }
});

router.post('/:id/like/unlike', async (req, res) => {
  try {
    Like.findOneAndDelete({
      userId: req.body.userId,
      productId: req.body.productId,
    });
    return res.status(200).json({ unLike: true });
  } catch (e) {
    console.error(e);
    return res.status(400).json({ unLike: false, e });
  }
});

module.exports = router;
