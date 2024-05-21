import { Request, Response } from "express"

const checkhealth = (req:Request,res:Response)=>{
    try {
        res.json({message: "Healthy"})
        
    } catch (error) {
        res.json(error)
    }
}

module.exports = {checkhealth};