import express from "express";
import ProductsRoutes from "./routes/products.routes.js"

const app = express();

//Middlewares
app.use(express.json())
app.use(ProductsRoutes);

export default app;