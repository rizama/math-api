const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

afterEach(() => {
  jest.clearAllMocks();
});

describe('A FigureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
            Function
        );
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(
            Function
        );
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(
            Function
        );
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    });

    describe('A calculateRectanglePerimeter function', () => {
      it('should throw error when not given 2 parameters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
      });

      it('should throw error when given with non-number paramters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
      });

      it('should return correct value based on recatangle perimeter formula', () => {
        // Arrange
        const length = 20;
        const width = 10;
        const spyAdd = jest.spyOn(MathBasic, 'add');
        const spyMultiply = jest.spyOn(MathBasic, 'multiply');
        const figureCalculator = new FigureCalculator(MathBasic);

        // Action
        const result = figureCalculator.calculateRectanglePerimeter(length, width);

        // Assert
        expect(result).toEqual(60); // 2 x (length + width)
        expect(spyAdd).toHaveBeenCalledWith(length, width);
        expect(spyAdd).toHaveBeenCalledTimes(1);
        expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 * (length + width)
        expect(spyMultiply).toHaveBeenCalledTimes(1);
      });
    });

    describe('A calculateRectangleArea function', () => {
      it('should throw error when not given 2 parameters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
        expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
        expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
      });

      it('should throw error when given with non-number paramters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
        expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError();
        expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
      });

      it('should return correct value based on recatangle area formula', () => {
        // Arrange
        const length = 20;
        const width = 10;
        const spyMultiply = jest.spyOn(MathBasic, 'multiply');
        const figureCalculator = new FigureCalculator(MathBasic);

        // Action
        const result = figureCalculator.calculateRectangleArea(length, width);

        // Assert
        expect(result).toEqual(200); // (length x width)
        expect(spyMultiply).toHaveBeenCalledWith(length, width); // (length x width)
        expect(spyMultiply).toHaveBeenCalledTimes(1);
      });
    });

    describe('A calculateTrianglePerimeter function', () => {
      it('should throw error when not given 3 parameters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
        expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
        expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
        expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
      });

      it('should throw error when given with non-number paramters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, '9')).toThrowError();
        expect(() => figureCalculator.calculateTrianglePerimeter(null, '2', false)).toThrowError();
        expect(() => figureCalculator.calculateTrianglePerimeter([], {}, null)).toThrowError();
      });

      it('should return correct value based on triangle perimeter formula', () => {
        // Arrange
        const sideA = 4;
        const sideB = 5;
        const base = 3;
        const spyAdd = jest.spyOn(MathBasic, 'add');
        const figureCalculator = new FigureCalculator(MathBasic);

        // Action
        const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

        // Assert
        expect(result).toEqual(12); // (sideA + sideB) + base
        expect(spyAdd).toHaveBeenCalledWith(sideA, sideB); // (sideA + sideB) + base
        expect(spyAdd).toHaveBeenCalledWith((sideA + sideB), base); // (sideA + sideB) + base
        expect(spyAdd).toHaveBeenCalledTimes(2);
      });
    });

    describe('A calculateTriangleArea function', () => {
      it('should throw error when not given 2 parameters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(1, 2, 3, 4)).toThrowError();
      });

      it('should throw error when given with non-number parameters', () => {
        // arrange with dummy object
        const figureCalculator = new FigureCalculator({});

        // Assert
        expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea(null, '3')).toThrowError();
        expect(() => figureCalculator.calculateTriangleArea({}, [])).toThrowError();
      });

      it('should return correct value based on triangle area formula', () => {
        // Arrange
        const base = 3;
        const height = 4;
        const spyMultiply = jest.spyOn(MathBasic, 'multiply');
        const spyDevide = jest.spyOn(MathBasic, 'divide');
        const figureCalculator = new FigureCalculator(MathBasic);

        // Action
        const result = figureCalculator.calculateTriangleArea(base, height);

        // Assert
        expect(result).toEqual(6); // (base * height) / 2
        expect(spyMultiply).toHaveBeenCalledWith(base, height); // (base * height)
        expect(spyMultiply).toHaveBeenCalledTimes(1);
        expect(spyDevide).toHaveBeenCalledWith((base * height), 2); // (base * height) / 2
        expect(spyDevide).toHaveBeenCalledTimes(1);
      });
    });
});
