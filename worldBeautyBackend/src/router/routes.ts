import express from "express";
import clienteController from "../controller/clienteController";



const router = express.Router()

router.post("/cadastrar", clienteController.create)

router.get("/pegar", clienteController.read)

router.put("/atualizar", clienteController.update)

router.delete("/deletar", clienteController.delete)

export default router