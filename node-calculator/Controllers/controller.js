class Controller {
  add(arr) {
    const num = Number(arr[0]) + Number(arr[1]);
    return num;
  }

  sub(arr) {
    return Number(arr[0]) - Number(arr[1]);
  }

  mult(arr) {
    return Number(arr[0]) * Number(arr[1]);
  }

  div(arr) {
    return Number(arr[0]) / Number(arr[1]);
  }
}

module.exports = new Controller();
