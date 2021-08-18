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
  const product = new Product(req.body);

  product.save((err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({ success: true });
  });
});

// Get Product By Id
// GET
router.get("/products_by_id", (req, res) => {
  let type = req.query.type
  let productIds = req.query.id

  if (type === "array") {
      let ids = req.query.id.split(',');
      productIds = [];
      productIds = ids.map(item => {
          return item
      })
  }

  Product.find({ '_id': { $in: productIds } })
      .populate('writer')
      .exec((err, product) => {
          if (err) return res.status(400).send(err)

          return res.status(200).send(product)
      })
});

///////////////////////////////////////////////
//                   Like
///////////////////////////////////////////////

// getlike
router.get('/:id/like/getlike', async (req, res) => {
  try {
    const likes = await Like.find({ productId: req.params.id });
    return res.status(200).json({ getLike: true, likes: likes });
  } catch (e) {
    return res.status(400).json({ getLike: false, e });
  }
});

// uplike
router.post('/:id/like/uplike', async (req, res) => {
  try {
    let { productId, userId } = req.body;
    const newLike = await Like.create({
      userId,
      productId,
    });
    return res.status(200).json({ upLike: true });
  } catch (e) {
    return res.status(400).json({ upLike: false, e });
  }
});

//unlike
router.post('/:id/like/unlike', async (req, res) => {
  try {
    await Like.remove({
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
