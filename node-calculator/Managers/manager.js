const controller = require('../Controllers/controller');

class Calculator {
  constructor() {
    this.calculator = this.calculator.bind(this);
  }

  async calculator(req, res, next) {
    try {
      const { exp } = req.body;
      let result;

      if (exp.indexOf('-') !== -1) {
        const arr = exp.split('-');
        result = controller.sub(arr);
      }
      if (exp.indexOf('+') !== -1) {
        const arr = exp.split('+');
        result = controller.add(arr);
      }
      if (exp.indexOf('/') !== -1) {
        const arr = exp.split('/');
        result = controller.div(arr);
      }

      if (exp.indexOf('*') !== -1) {
        const arr = exp.split('*');
        result = controller.mult(arr);
      }
      return res.status(200).json({ result });
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = new Calculator();
