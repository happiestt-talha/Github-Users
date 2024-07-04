import express from 'express'
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.json({
        'message': 'Hello World!:',
        'name': 'John Doe',
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})