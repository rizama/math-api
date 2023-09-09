const createServer = require('./CreateServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('when GET /subtract', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
            // Arrange
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic, 'subtract');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4); // a - b
            expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('when GET /multiply', () => {
        it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
            // Arrange
            const a = 12;
            const b = 8;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(96); // a * b
            expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('when GET /divide', () => {
        it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
            // Arrange
            const a = 16;
            const b = 8;
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const server = createServer({ mathBasic: MathBasic });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(2); // a / b
            expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('when GET /rectangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is rectangle perimeter correctly', async () => {
            // Arrange
            const length = 10;
            const width = 20;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectanglePerimeter = jest.spyOn(
                figureCalculator,
                'calculateRectanglePerimeter'
            );
            const server = createServer({ figureCalculator: figureCalculator });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60); // (length + width) * 2
            expect(spyCalculateRectanglePerimeter).toBeCalledWith(
                length,
                width
            );
        });
    });

    describe('when GET /rectangle/area', () => {
        it('should respond with a status code of 200 and the payload value is result of rectangle area correctly', async () => {
            // Arrange
            const length = 10;
            const width = 20;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectangleArea = jest.spyOn(
                figureCalculator,
                'calculateRectangleArea'
            );
            const server = createServer({ figureCalculator: figureCalculator });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(200); // length * width
            expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
        });
    });

    describe('when GET /triangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is result of triangle perimeter', async () => {
            // Arrange
            const sideA = 10;
            const sideB = 10;
            const base = 20;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTrianglePerimeter = jest.spyOn(
                figureCalculator,
                'calculateTrianglePerimeter'
            );
            const server = createServer({ figureCalculator: figureCalculator });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(40); // sideA + sideB + base
            expect(spyCalculateTrianglePerimeter).toBeCalledWith(
                sideA,
                sideB,
                base
            );
        });
    });

    describe('when GET /triangle/area', () => {
        it('should respond with a status code of 200 and the payload value is result of triangle area correctly', async () => {
            // Arrange
            const base = 20;
            const height = 10;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTriangleArea = jest.spyOn(
                figureCalculator,
                'calculateTriangleArea'
            );
            const server = createServer({ figureCalculator: figureCalculator });
            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${base}/${height}`,
            });
            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(100); // (base * height) / 2
            expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
        });
    });
});
