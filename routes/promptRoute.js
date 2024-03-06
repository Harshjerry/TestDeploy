const router = require("express").Router();
const Post = require("../models/post");


router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/",async(req,res)=>{
try{
const posts =await Post.find();
res.status(200).json(posts);
} catch(err){
  res.status(500).json(err);
}
})

module.exports = router;
