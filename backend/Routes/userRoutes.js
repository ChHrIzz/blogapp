const express = require('express');
const router = express.Router();
const user = require('../Model/user');


router.use(express.json());

router.post('/post',async(req,res)=>{
    try {
        const data = req.body;
        await user(data).save()
        res.status(200).json({message:"data added"})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"unable to register"})
    }
})

router.post('/login',async(req,res)=>{
    let u = req.body.username;
    let p = req.body.password;
    console.log(u)
    console.log(p)
    const person = await user.findOne({username:u})
    
    try {
        if (person.password===p){
            res.status(200)
            .json({message:"login successfull"})
        }
    } catch (error) {
       
    }
})

router.get('/viewmypro/:id',async(req,res)=>{
    let userId = req.params.id;
    try {
        const item = await user.find({_id:userId});
        res.status(200).json(item)
    } catch (error) {
        console.log(error)
        
    }
})


module.exports = router;