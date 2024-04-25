const express = require('express');
const router = express.Router();
const post = require('../Model/post');


router.use(express.json());

//to add blog
router.post('/addblog',async(req,res)=>{
    const blog =req.body
    try {
        const data = post(blog).save();
        res.status(200).json({message:"blog added"})
    } catch (error) {
        console.log(error)
        res.json({message:"unable to add blog"})

    }

})

router.get('/viewall',async(req,res)=>{
    try {
        const data = await post.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
})

//to delete 

router.delete('/remove/:id',async(req,res)=>{
    try {
        const data = await post.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"blog deleted"})

    } catch (error) {
        res.status(404).send({message:"No blog found"})
    }
})

//to update
 
router.put('/edit/:id',async(req,res)=>{
    try {
        var userid = req.params.id;
        var item = req.body;
        const data = await post.findByIdAndUpdate(userid,item)
        res.status(200).json({message:"blog updated"})

    } catch (error) {
        res.status(404).send({message:"No blog found"})

    }
})


module.exports = router;