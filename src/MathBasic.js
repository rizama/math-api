const Validator = require('./validator');

const MathBasic = {
    add: (...args) => {
        const [a, b] = Validator.args(args, 2);

        return a + b;
    },
    subtract: (...args) => {
        const [a, b] = Validator.args(args, 2);

        return a - b;
    },
    multiply: (...args) => {
        const [a, b] = Validator.args(args, 2);

        return a * b;
    },
    divide: (...args) => {
        const [a, b] = Validator.args(args, 2);

        return a / b;
    },
};

module.exports = MathBasic;
