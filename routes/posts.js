const express = require('express');
const router = express.Router();
const Post = require('../models/post')

router.get('/', async(req, res) => {
    try{
      const post = await Post.find({})
      res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.post('/', async(req, res) => {
    try{
      const post = await new Post({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        count: req.body.count
      });
      res.status(200).json(post);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})
router.get('/:postId', async(req, res) => {
    try{
      const post = await Post.findById(req.params.postId)
      res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.delete('/:postId', async(req, res) => {
    try{
      const {id} = req.params.postId;
      const post = await Post.remove(id);
      if(!post){
        return res.status(404).json({message: `cannot find any product with ID ${id}`});
      }
      res.status(200).json(post);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

router.put('/:postId', async(req, res) => {
    try{
      const {id} = req.params.postId;
      const post = await Post.findByIdAndUpdate(id, req.body);
      if(!post){
        return res.status(404).json({message: `cannot find any product with ID ${id}`});
      }
      const updatepost = await Post.findById(id)
      res.status(200).json(updatepost);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

module.exports = router;
