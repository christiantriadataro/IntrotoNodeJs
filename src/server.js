import http from "http";
import {fileURLToPath} from "node:url";
import path from "node:path";
import fs from "node:fs/promises";
import open from "open"

const interpolate = (html, data) => {
    return html.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, placeholder) => {
        return data[placeholder] || '';
    });
}

const formatNotes = (notes) => {
  return notes.map(note => {
    return `<div class="note">
        <p>${note.content}</p>
        <div class="tags">
          ${note.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    `
  }).join('\n')
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const HTML_PATH = path.join(__dirname, "./template.html")

export const createServer = notes => {
    return http.createServer(async (req, res) => {
        const HTML_PATH = path.join(__dirname, "./template.html")
        const template = await fs.readFile(HTML_PATH, "utf-8")
        const html = interpolate(template, { notes: formatNotes(notes)})

        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(html)
    })
}

export const start = (notes, port) => {
    const server = createServer(notes)
    server.listen(port, () => {
        const address = `http://localhost:${port}`
        console.log(`server on ${address}`)
        open(address)
    })
}