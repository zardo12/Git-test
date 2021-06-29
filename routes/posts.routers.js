const express = require('express');
const router = express.Router()
const Posts = require('../controllers/controller')

router.get('/about', async (req,res)=>{
    const list = await Posts.findAll();
    res.render('about',{title: 'list', list});
})

router.get('/', async (req,res)=>{
    if (req.query.titel && req.query.content){
        const data = {tittel: req.query.titel, content: req.query.content}
        const newpost = await Posts.create(data);
        
    }
        const list = await Posts.findAll();
        res.render('index',{title: 'list', list})
    
})


router.post('/',async (req,res) => {
    const data = {
    title:  req.body.title,
    content: req.body.content
    } 
    const post = await Posts.create(data)
    console.log(post)
    res.send(post);
})
router.get('/creatpost', (req,res) => {
    res.render('creatpost')
})

router.get('/:postId', async (req,res) => {
    const post = await Posts.find(req.params.postId)
    res.render('post',post)
})

router.post('/update/:postId', async (req,res) => {
    const update = {tittel: req.body.tittel,content: req.body.content}
    const post = await  Posts.update(req.params.postId,update)
   res.render('post',post)
   
})


router.post('/delete/:postId', async (req,res) => {
    const posts = await Posts.remove(req.params.postId)
    const list = await Posts.findAll();
    res.render('index',{title: 'list', list})
})

module.exports = router