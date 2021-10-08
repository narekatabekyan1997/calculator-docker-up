const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const routes = require('./Routes');

const app = express();
app.use(cors());
app.use(bodyParser.json(
  {
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
    extended: true,
  },
));
app.use(bodyParser.urlencoded(
  {
    extended: true,
    parameterLimit: 1000000,
    limit: 1024 * 1024 * 1024,
  },
));

app.use(routes);

app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(err.statusCode || err.status || 500)
      .send({ statusCode: err.statusCode || err.status, message: err.message || {}, details: err.details || {} });
  }
  return next();
});
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  return res.status(404).send({ message: err.message, status: err.status, details: err });
});

app.listen(PORT, '0.0.0.0', () => { console.log(`Server listening on port ${PORT}`); });
