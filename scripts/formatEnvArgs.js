function main(args) {
  const result = {};

  args.forEach((arg) => {
    const [key, value] = arg.split('=');
    result[key] = value;
  });

  return result;
}

module.exports = main;
