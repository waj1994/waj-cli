const AmdZip = require('adm-zip');
const fs = require('fs');

const zip = new AmdZip();

let bool = true;
try {
  zip.addLocalFolder('./dist');
} catch (error) {
  bool = false;
  console.log('dist目录不存在');
}
if (!bool) {
  return;
}
if (fs.existsSync('./dist.zip')) {
  fs.rmSync('./dist.zip');
}
fs.writeFileSync('./dist.zip', zip.toBuffer());
