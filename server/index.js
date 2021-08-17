const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(hpp());
app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(morgan('dev'));
app.use(express.json());

// node.js 서버에 있는 이미지를 클라이언트에서 보여주기 위해 필요
app.use('/uploads', express.static('uploads'));

const { MONGO_URI, PORT } = config;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('mongodb connecting success');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/product', require('./routes/api/product'));

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
