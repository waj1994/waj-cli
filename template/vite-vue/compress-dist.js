import { existsSync, rmSync, writeFileSync } from 'node:fs'
import AmdZip from 'adm-zip'

const zip = new AmdZip()

zip.addLocalFolder('./dist')

if (existsSync('./dist.zip')) {
  rmSync('./dist.zip')
}
writeFileSync('./dist.zip', zip.toBuffer())
