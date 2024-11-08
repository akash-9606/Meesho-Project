const express= require("express")
const dotenv=require("dotenv")
const cors=require("cors") 
const userRoutes=require("./routes/userRoutes")
const productRoutes=require("./routes/productRoutes.js")
const cartRoutes=require("./routes/cartRoutes.js")
const orderRoutes=require("./routes/orderRoutes.js")
const connectDb=require("./config/database")
const app=express()
app.use(express.json())
dotenv.config()
connectDb()

app.use(cors({
    origin:process.env.FRONTEND_URI,
    credentials:true,
}))

app.use('/api/users',userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes)


app.listen(process.env.PORT,()=>console.log(`port is running on ${process.env.PORT}`))




