import { DataTypes, Model } from "sequelize"
import { toDefaultValue } from "sequelize/types/utils"
import db from "../config/database.config"

interface ClienteIf {
    id: string
    nome: string
    cpf: string
    rg: string
    produtosConsumidos: string[]
    servicosConsumidos: string[]
}

export class Cliente extends Model<ClienteIf>{}

Cliente.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },

    rg: {
        type: DataTypes.STRING,
        allowNull: false
    },

    produtosConsumidos: {
        type: DataTypes.ARRAY,
        allowNull: true
    },

    servicosConsumidos: {
        type: DataTypes.ARRAY,
        allowNull: true
    }
},
{
    sequelize:db,
    tableName:"cliente",   
})