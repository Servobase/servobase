

const checkhealth = (req,res)=>{
    try {
        res.json({message: "Healthy"})
        
    } catch (error) {
        res.json(error)
    }
}

module.exports = {checkhealth};