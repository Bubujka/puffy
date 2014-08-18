#!/usr/bin/env node

var toggl = new (require('toggl-api'))({apiToken: process.env.TOGGL_API_TOKEN}),
    client = new (require('basecamp')).Client(client_id, client_secret, redirect_uri, userAgent);
    program = require('commander'),
    fs = require('fs')
    /*
    dmenu = require('./lib/dmenu'),
    dzen2 = require('./lib/dzen2')
    */

/*
function _notify(what, color){
  if(!color)
    color = 'white'
  exec('echo "'+ what + '" | dzen2-wrapper '+ color)
}

function _start(what){
  toggl.startTimeEntry({
    description: what,
  }, function(err){
    if(err)
      return console.error(err)
    fs.openSync('/home/bubujka/.pid/tgl.pid', 'w')
    _notify('Новая задача в toggl поставлена', 'green')
  })
}

function _stop(){
  toggl.getCurrentTimeEntry(function(err, entry){
    if(err)
      return console.error(err)
    toggl.stopTimeEntry(entry.id, function(err){
      if(err)
        return console.error(err)
      fs.unlinkSync('/home/bubujka/.pid/tgl.pid')
      _notify('Остановили toggl', 'red')
    })
  })
}

function _check(){
  toggl.getCurrentTimeEntry(function(err, entry){
    if(err)
      return
    if(entry)
      fs.openSync('/home/bubujka/.pid/tgl.pid', 'w')
    else
      if(fs.existsSync('/home/bubujka/.pid/tgl.pid'))
        fs.unlinkSync('/home/bubujka/.pid/tgl.pid')
  })
}

program.version('0.0.1')
program
  .command('start <what>')
  .description('start new time entry with <what> description')
  .action(_start);

program
  .command('stop')
  .description('stop latest time entry')
  .action(_stop);

program
  .command('check')
  .description('Check toggl status, adjust pid file')
  .action(_check);


program
  .command('puffy')
  .option('-a, --accounts [items]', 'Show selection from accounts')
  .description('start new time entry with <what> description')
  .action(function(program){
    var accounts = program.accounts.split(',').join(' ')
    child = exec('puffy my '+accounts+' | dmenu-wrapper "Toggl ('+accounts+')" 40', function(err, stdout, stderr){
      if(err)
        _stop()
      if(stdout == '')
        _stop()
      else
        _start(stdout)
    })
  })



program.parse(process.argv)


if (!program.args.length){
  child = exec('puffy my | dmenu-wrapper Toggl 40', function(err, stdout, stderr){
    if(err)
      _stop()
    if(stdout == '')
      _stop()
    else
      _start(stdout)
  })
}
*/
