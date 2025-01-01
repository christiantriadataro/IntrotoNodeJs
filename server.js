import http from "http"

const PORT = 4000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello there")
})

server.listen(PORT, () => {
    console.log("server running on port http://localhost:4000")
})