const webpack = require('webpack')
const config = require('../webpack.config.js')
debugger;
const compiler = webpack(config)
function compilerCallback(err, stats) {
  const statsString = stats.toString();
  console.log(statsString)
}
debugger
compiler.run((err, stats) => {
  compilerCallback(err, stats)
})