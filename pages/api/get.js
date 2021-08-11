

const fs = require('fs')
const child_process = require('child_process')
const path = require('path')

export default (req, res) => {
  var qwq = child_process.execSync("pwd && ls").toString()
  console.warn(qwq)
  fs.readdir(path.resolve(__dirname,"./image"), { encoding: 'utf8' }, (err, files) => {
    if (err) throw err
    var image = files[Math.floor((Math.random() * files.length))]
    var resp = path.resolve(__dirname,"./image").concat(image)

    res.setHeader('Content-Type', 'image')
    res.status(200).send(fs.readFileSync(resp))
  })
}