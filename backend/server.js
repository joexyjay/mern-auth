import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config()

connectDB()

const port = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser())
app.use('/api/users', userRoute)

if(process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, '/frontend/dist')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Server is ready')
    })
}



app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})