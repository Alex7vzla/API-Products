import { DataTypes } from "sequelize";
import {db} from "../database/database.js";

export const Product = db.define('Products',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    is_available: {
        type: DataTypes.BOOLEAN
    },
},
{
    timestamps: false
});
