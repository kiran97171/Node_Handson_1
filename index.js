

    const http = require("http")
    const app = http. createServer((req, res)=>{
        res.write("<p>Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.</p>")
        res.end()
    })

    app.listen(4000, () => {
        console.log ("Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.")
    })