import AmdZip from 'adm-zip'
import { existsSync, rmSync, writeFileSync } from 'fs'

const zip = new AmdZip()

zip.addLocalFolder('./dist')

if (existsSync('./dist.zip')) {
  rmSync('./dist.zip')
}
writeFileSync('./dist.zip', zip.toBuffer())
