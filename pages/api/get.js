const fs = require('fs')
const path = require('path')
let fileDir = path.resolve(__dirname, './')
// 异步读取目录内容
fs.readdir(fileDir, { encoding: 'utf8' }, (err, files) => {
    var image = files[Math.floor((Math.random()*files.length))]
})
var resp = "/iamge/".concat(image)
function Get() {
    return (
        <Image
        src={resp}
      />
    )
  }
  
export default Get