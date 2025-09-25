const fs = require('node:fs')
const AmdZip = require('adm-zip')

const zip = new AmdZip()

zip.addLocalFolder('./dist')

if (fs.existsSync('./dist.zip')) {
  fs.rmSync('./dist.zip')
}
fs.writeFileSync('./dist.zip', zip.toBuffer())
