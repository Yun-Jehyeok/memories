const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const config = require('../../config/index');
const { auth } = require('../../middleware/auth');

const { JWT_SECRET } = config;

const router = express.Router();

// GET ALL USERS / GET
router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    if (!users)
      return res.status(400).json({ msg: '유저가 존재하지 않습니다.' });

    res.status(200).json(users);
  } catch (e) {
    console.log(e);
  }
});

// REGISTER / POST
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).json({ msg: '이름을 작성해주세요.' });
  else if (!email)
    return res.status(400).json({ msg: '이메일을 작성해주세요.' });
  else if (!password)
    return res.status(400).json({ msg: '비밀번호를 작성해주세요.' });

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: '이미 존재하는 유저입니다.' });

    const newUser = new User({
      name,
      email,
      password,
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(400).json({ err });

        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.name },
            JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) return res.status(400).json({ err });

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                },
              });
            },
          );
        });
      });
    });
  });
});

router.post('/addToCart', (req, res) => {
  User.findOne({ _id: req.query.userId }, (err, userInfo) => {
    let duplicate = false;

    userInfo.cart.forEach((cartInfo) => {
      if (cartInfo.id === req.query.productId) {
        duplicate = true;
      }
    });

    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.query.userId, 'cart.id': req.query.productId },
        { $inc: { 'cart.$.quantity': 1 } },
        { new: true },
        () => {
          if (err) return res.json({ success: false, err });
          console.log(userInfo.cart);
          res.status(200).json(userInfo.cart);
        },
      );
    } else {
      User.findOneAndUpdate(
        { _id: req.query.userId },
        {
          $push: {
            cart: {
              id: req.query.productId,
              quantity: 1,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.json({ success: false, err });

          console.log(userInfo.cart);
          res.status(200).json(userInfo.cart);
        },
      );
    }
  });
});

// profile edit action
router.post('/:id/edit', async (req, res, next) => {
  const { address, name } = req.body;

  try {
    const modified_profile = await User.findByIdAndUpdate(
      req.params.id,
      { address, name },
      { new: true },
    );

    res.json(modified_profile);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post('/changepassword', async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ msg: '이메일을 작성해주세요.' });
  else if (!password)
    return res.status(400).json({ msg: '비밀번호를 입력해주세요.' });

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: '없는 이메일입니다.' });

    bcrypt.genSalt(10, (err, salt) => {
      //암호화해주는 모듈
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(400).json({ err });
        try {
          await User.findByIdAndUpdate(
            user.id,
            { password: hash },
            { new: true },
          ); // mongoDB함수
          res.json('success');
        } catch (e) {
          console.log(e);
          res.json({ msg: e });
        }
      });
    });
  });
});

router.post('/successBuy', auth, (req, res) => {
  let history = [];
  let transactionData = {};

  req.body.cartDetail.forEach((item) => {
    history.push({
      dateOfPurchase: Date.now(),
      name: item.title,
      id: item._id,
      price: item.price,
      quantity: item.quantity,
      paymentId: req.body.paymentData.paymentID,
    });
  });

  transactionData.user = {
    id: req.user._id,
    name: req.user.name,
    lastname: req.user.lastname,
    email: req.user.email,
  };

  transactionData.data = req.body.paymentData;
  transactionData.product = history;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { history: history }, $set: { cart: [] } },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });

      const payment = new Payment(transactionData);
      payment.save((err, doc) => {
        if (err) return res.json({ success: false, err });

        let products = [];
        doc.product.forEach((item) => {
          products.push({ id: item.id, quantity: item.quantity });
        });

        async.eachSeries(
          products,
          (item, callback) => {
            Product.update(
              { _id: item.id },
              {
                $inc: {
                  sold: item.quantity,
                },
              },
              { new: false },
              callback,
            );
          },
          (err) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({
              success: true,
              cart: user.cart,
              cartDetail: [],
            });
          },
        );
      });
    },
  );
});

router.get('/getHistory', auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, doc) => {
    let history = doc.history;
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, history });
  });
});

module.exports = router;
