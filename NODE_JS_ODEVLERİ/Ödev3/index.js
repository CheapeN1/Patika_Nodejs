const args = process.argv.slice(2);
const radius = parseFloat(args[0]);
const circle = require('./circle.js')

circle.circleAreaCalc(args[0])

circle.circlePerimeterCalc(args[1])