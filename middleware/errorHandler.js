const errorHandler = (err, req, res, next)=>{
    if(err){
        res.status(400).send({sattus: false, message: err.message})
    }
}

module.exports = errorHandler;