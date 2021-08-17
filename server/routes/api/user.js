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
  console.log(req.query)
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
          res.status(200).json(userInfo.cart);
        },
      );
    }
  });
});

module.exports = router;
