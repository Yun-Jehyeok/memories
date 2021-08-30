const express = require('express');
const { Product } = require('../../models/product');
const { User } = require('../../models/user');
const { Like } = require('../../models/Like');
const { Comment } = require('../../models/comment');
const multer = require('multer');
const moment = require('moment');

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

    if (ext !== '.jpg' || ext !== '.png' || ext !== '.jpeg') {
      return cb(res.status(400).end('only jpg, png, jpeg are allowed'), false);
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
router.get('/products_by_id', async (req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  if (type === 'array') {
    let ids = req.query.id.split(',');
    productIds = [];
    productIds = ids.map((item) => {
      return item;
    });
  }

  await Product.find({ _id: { $in: productIds } })
    .populate('writer')
    .exec((err, product) => {
      if (err) return res.status(400).send(err);

      return res.status(200).send(product);
    });
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

///////////////////////////////////////////////
// Comments Route

// GET ALL COMMENTS
router.get('/:id/comments', async (req, res) => {
  try {
    const comment = await Product.findById(req.params.id).populate({
      path: 'comments',
    });

    const result = comment.comments;

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

// WRITE COMMENT
router.post('/:id/comments', async (req, res) => {
  if (!req.body.token)
    return res.status(400).json({ msg: '로그인이 필요합니다.' });

  const newComment = await Comment.create({
    contents: req.body.contents,
    creator: req.body.userId,
    creatorName: req.body.userName,
    product: req.body.id,
    date: moment().format('MMMM DD, YYYY'),
  });

  try {
    await Product.findByIdAndUpdate(req.body.id, {
      $push: {
        comments: newComment._id,
      },
    });

    await User.findByIdAndUpdate(req.body.userId, {
      $push: {
        comments: {
          product_id: req.body.id,
          comment_id: newComment._id,
        },
      },
    });

    res.json(newComment);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// DELETE COMMENT / DELETE
router.delete('/comment/:id', async (req, res) => {
  await Comment.deleteOne({ _id: req.params.id });
  // User에서 comment가 안지워지네....
  await User.findByIdAndUpdate(req.body.userId, {
    $pull: {
      comments: { comment_id: req.params.id },
    },
  });
  await Product.findOneAndUpdate(
    { comments: req.params.id },
    {
      $pull: { comments: req.params.id },
    },
  );

  return res.json({ success: true });
});

module.exports = router;
