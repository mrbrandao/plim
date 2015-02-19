var fs = require('fs')
var path = require('path')

loadDevices = function () {
  dir = './dev'
  var devices = Array()
  var files = fs.readdirSync(dir)

  for (f = 0; f < files.length; f++) {
    file = fs.readFileSync(dir + '/' + files[f])
    devices[f] = JSON.parse(file.toString())
  }

  return devices
}

module.exports = {
  loadDevices: loadDevices
}

/* Console */
if (process.argv[2] == 'list-dev') {
  console.log(loadDevices())
}
