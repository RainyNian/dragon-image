

const fs = require('fs')
const child_process = require('child_process')

export default (req, res) => {
  var qwq = child_process.execSync("pwd && ls").toString()
  console.warn(qwq)
  fs.readdir("./image/", { encoding: 'utf8' }, (err, files) => {
    if (err) throw err
    var image = files[Math.floor((Math.random() * files.length))]
    var resp = "./image/".concat(image)

    res.setHeader('Content-Type', 'image')
    res.status(200).send(fs.readFileSync(resp))
  })
}