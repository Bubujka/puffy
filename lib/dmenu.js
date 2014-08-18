var spawn = require('child_process').spawn

module.exports = dmenu = function(variants, opts, callback){
  var ret = '',
      d = spawn('dmenu', opts);

  d.on('error', function(err){
    callback(err);
  });

  d.stdout.setEncoding('utf-8')

  d.stdout.on('data', function(data){
    ret += data.toString()
  })

  d.on('close', function(code){
    if(code==0)
      callback(null, ret)
    else
      callback(code)
  })

  d.stdin.write(variants.join('\n'))
  d.stdin.end()
}
