

module.exports = (err, req,res, next)=>{
    console.error('inside err handler', err);
    res.json(`from err handlr${err}`);

    
};