import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors());
app.use(express.json());

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })

        app.get('/', (req, res) => {
            res.send('<h1>Response 200</h1>')
        })
    }
    catch (e) {
        console.log(e);
    }
}

start()