const Validator = {
  args: (args, expectedArgumentsCount) => {
    if (args.length !== expectedArgumentsCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgumentsCount} parameter`);
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter number');
      }
    });

    return args;
  }
}

module.exports = Validator;