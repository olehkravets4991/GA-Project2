const express = require("express")
const ClientModel = require("../models/client.js")

const router = express.Router()

//INDEX
router.get("/", async (req, res) => {
    const allClients = await ClientModel.find({})
    res.render("clients/index.ejs",{allClients}) 
 })

 // NEW
router.get("/new", (req, res)=>{
    res.render("clients/new.ejs")
} )

//DELETE
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const oneClient = await ClientModel.findByIdAndDelete(id, req.body);
    res.redirect('/client')
})

///UPDATE
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.employed = req.body.employed === 'on' ? true : false;
    const oneClient = await ClientModel.findByIdAndUpdate(id, req.body);
    res.redirect('/client')
})

//CREATE
router.post('/', async (req, res) => {
    if(req.body.employed === 'on'){
        req.body.employed = true;
    }else {
        req.body.readyToEat = false;
    }
   const addCleint= await ClientModel.create(req.body);
    res.redirect('/client');
})

/// EDIT
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const oneClient = await ClientModel.findById(id);
    res.render('clients/edit.ejs', {oneClient})
})

//SHOW
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const oneClient =  await ClientModel.findById(id)
    res.render("clients/show.ejs", {oneClient, id})
})

module.exports= router