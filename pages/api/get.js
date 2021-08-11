
import Image from 'next/image'
const fs = require('fs')
// 异步读取目录内容


export default (req, res) => {
  fs.readdir("public/image", { encoding: 'utf8' }, (err, files) => {
    if (err)  throw err
    var image = files[Math.floor((Math.random()*files.length))]
    var resp = "public/image/".concat(image)
    res.setHeader('Content-Type', 'image')
    res.status(200).send(fs.readFileSync(resp))
  })
}