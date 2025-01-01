import fs from "node:fs/promises"
import {fileURLToPath} from "node:url";
import path from "node:path";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, "../db.json")
// const DB_PATH = path.join("..", "db.json");

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, "utf-8")
    return JSON.parse(db)
}

export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 4))
    return db
}

export const insertDB = async (note) => {
    const db = await getDB()
    db.notes.push(note)
    await saveDB(db)
    return note
}