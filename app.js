const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())
app.use(express.json())

const ytdl = require("ytdl-core")

app.get("/", (req, res) => {
    res.send("Bem-Vindo")
})

app.get("/ytdownload", async (req, res) => {
    const { url } = req.query

    res.header("Content-Disposition", 'attachmentt; filename="video.mp4"')
    res.send("Teste")
    return ytdl(url).pipe(res)
})

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`Servidor funcionando corretamente na porta ${PORT}`)
})
