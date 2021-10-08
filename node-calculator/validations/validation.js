const reg = new RegExp('^[0-9]+[-+/*][0-9]+$');

module.exports = function (req, res, next) {
  try {
    const { exp } = req.body;
    if (!reg.test(exp)) {
      return res.status(400).json({ message: 'Wrong expression' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};
