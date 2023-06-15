import { Cliente } from "../entities/cliente";
import {v4 as uuidv4} from 'uuid'
import express, {NextFunction, Request, Response} from 'express';

class ClienteController {
    async create(req: Request, res: Response){
        const id = uuidv4();
        try{
            const record = await Cliente.create({ ...req.body, id});
            return res.json({ record, msg: 'create succesfully'});
        }catch(e) {
            return res.json({ msg:'fail to create', status:500, route: "/create"})
        }
    }

    async read(req: Request, res: Response){
        try{
            const limit = req.query?.limit as number | undefined //PAGINATION
            const offset = req.query?.offset as number | undefined //PAGINATION
            const records = await Cliente.findAll({
                where:{},
                limit, //PAGINATION
                offset //PAGINATION
            })
            return res.json(records)         
        }catch(e) {
            return res.json({ msg:'fail to read', status:500, route: "/read"})
        }
    }

    async update(req: Request, res: Response){
        try{
            const {id} = req.params
            const record = await Cliente.findOne({where:{id}})
            if(!record){
                return res.json({msg: "cannot find this record"})
            }
            return res.json({record})
        }catch(e) {
            return res.json({ msg:'fail to update', status:500, route: "/update/:id"})
        }
    }

    async delete(req: Request, res: Response){
        try{
            const {id} = req.params
            const record = await Cliente.findOne({where:{id}})
            if(!record){
                return res.json({msg: "cannot find this record"})
            }
            const deletedRecord = await record.destroy()
            return res.json({record: deletedRecord})
        }catch(e) {
            return res.json({ msg:'fail to delete', status:500, route: "/delete/:id"})
        }
    }
}

export default new ClienteController()