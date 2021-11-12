import express from 'express'

import routes from './routes.js'


const app = express()
const port = 3000

app.use('/app-git', routes)

app.listen(port, () => {
    console.log(`Server launched at port ${port} 🚀`)
})