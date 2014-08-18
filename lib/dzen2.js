var spawn = require('child_process').spawn

module.exports = function(variants, opts){
  var ret = '',
      d = spawn('dzen2', opts);

  d.stdin.write(variants.join('\n'))
  d.stdin.end()
}
