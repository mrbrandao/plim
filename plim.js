var fs = require('fs')
var path = require('path')
var  dir = './dev'

loadDevices = function () {
  var devices = Array()
  var files = fs.readdirSync(dir)

  for (f = 0; f < files.length; f++) {
    file = fs.readFileSync(dir + '/' + files[f])
    devices[f] = JSON.parse(file.toString())
  }

  return devices
}

loadDevice = function (did) {
  var device

  file = fs.readFileSync(dir + '/' + did)
  device = JSON.parse(file.toString())

  return device
}

toggleOn = function (did) {
  var device

  file = fs.readFileSync(dir + '/' + did)
  device = JSON.parse(file.toString())

  if (device.on) {
    device.on = false
  } else {
    device.on = true
  }

  file = fs.writeFileSync(dir + '/' + did, JSON.stringify(device, null, 2))

  return device
}

module.exports = {
  loadDevices: loadDevices,
  loadDevice: loadDevice,
  toggleOn: toggleOn
}

/* Console */
if (process.argv[2] == 'list-dev') {
  console.log(loadDevices())
}

if (process.argv[2] == 'show-dev') {
  console.log(loadDevice(process.argv[3]))
}

if (process.argv[2] == 'toggle-dev') {
  console.log(toggleOn(process.argv[3]))
}
