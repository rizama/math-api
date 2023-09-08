const Validator = require("./validator");

class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }

    calculateRectanglePerimeter = (...args) => {
        const [length, width] = Validator.args(args, 2);

        // formula: (2 * (length + width))
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    };

    calculateRectangleArea = (...args) => {
        const [length, width] = Validator.args(args, 2);

        // formula: length * width
        return this._mathBasic.multiply(length, width);
    };

    calculateTrianglePerimeter = (...args) => {
        const [sideA, sideB, base] = Validator.args(args, 3);

        // formula: base + sideA + sideB
        return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
    };

    calculateTriangleArea = (...args) => {
        const [base, height] = Validator.args(args, 2);

        // formula: (base * height) / 2
        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
    };
}

module.exports = FigureCalculator;
