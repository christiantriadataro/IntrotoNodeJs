import fs from "node:fs/promises"
import {fileURLToPath} from "node:url"
import path from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const readPjson = async () => {
    const pJsonPath = path.join(__dirname, "package.json")
    console.log(JSON.parse(await fs.readFile(pJsonPath, "utf-8")))
}

const writeFile = async () => {
    const newFile = path.join(__dirname, "demo.js")
    await fs.writeFile(newFile, `console.log('yooo!')`)
}

// readPjson()
writeFile()
// console.log(__filename)
// console.log(__dirname)
// console.log(pJsonPath)