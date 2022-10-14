import express from "express";
import ProductsRoutes from "./v1/routes/products.routes.js"

const app = express();

//Middlewares
app.use(express.json())
app.use('/api/v1/products', ProductsRoutes);

export default app;