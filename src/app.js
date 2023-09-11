const createServer = require('./CreateServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

const start = async () => {
    const figureCalculator = new FigureCalculator(MathBasic);
    const server = createServer({
        mathBasic: MathBasic,
        figureCalculator: figureCalculator,
    });


    await server.start();
    console.log(`Server start at ${server.info.uri}`)
};

start();