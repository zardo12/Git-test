const express = require('express');
const router = express.Router()
const Topics = require('../controllers/stundenplan.controller')

router.get('/about', async (req,res)=>{
    const list = await Topics.findAll();
    res.render('about',{title: 'list', list});
})

router.get('/', async (req,res)=>{
    if (req.query.titel && req.query.content){
        const data = {tittel: req.query.titel, content: req.query.content}
        await Topics.create(data);
        return res.redirect(req.originalUrl.split("?").shift());

        
    }
        const list = await Topics.findAll();
        res.send(list)
    
})


router.post('/create',async (req,res) => {
    const data = {
    name:  req.body.name,
    weekday: req.body.weekday,
    start:  req.body.start,
    end: req.body.end
    } 
    const topic = await Topics.create(data)
    console.log(topic)
    res.send(topic);
})
router.get('/creattopic', (req,res) => {
    res.render('creattopic')
})

router.get('/:topicId', async (req,res) => {
    const topic = await Topics.find(req.params.topicId)
    res.send(topic)
})

router.post('/update/:topicId', async (req,res) => {
    const update = {
        name: req.body.name,
        weekday: req.body.weekday,
        start: req.body.start,
        end: req.body.end,
    }
    const topic = await  Topics.update(req.params.topicId,update)
    res.send(topic)
   
})


router.get('/delete/:topicId', async (req,res) => {
    const topics = await Topics.remove(req.params.topicId)
    const list = await Topics.findAll();
    res.send(list)
})

module.exports = router