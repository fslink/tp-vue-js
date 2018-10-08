const express = require('express')
const app = express()
let path = require('path')

app.use("/dist", express.static(path.join(__dirname, "/../client-vue-js/dist")))

app.get("/", (req,res) => {
	res.sendFile(path.join(__dirname+"/../client-vue-js/index.html"))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))