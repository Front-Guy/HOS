const Shame = require("../models/Shame");
const fs= require("fs");
const e = require("express");

exports.createShame = async (req, res) => {
    const shameInfos = req.body;

    delete shameInfos._id;

    const shame = new Shame({
        author : shameInfos.author,
        name: shameInfos.name,
        description: shameInfos.description,
        // image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
        image: BinData(0, '0A020F0B'),
        count : 0
    });

    try{
        await shame.save()
        res.status(201).json({message: "Nouveau scandale enregistré"})
    }catch(error){
        res.status(400).json({error})
    }
};

exports.getShames = async (req, res) => {
    try {
        const shames = await Shame.find({}).sort( {count: -1 } )
        res.status(200).json(shames)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
};

exports.countShame = async (req, res) => {

    const {count} = req.body

    try {
        await Shame.updateOne({_id: req.params.id}, { $set : {count : count, _id: req.params.id}})
        res.status(200).json({message: "Scandale modifié"})
    } catch (error) {
        res.status(500).json({error})
    }
};


exports.deleteShame = async (req, res) => {

    try{
        const response = await Shame.findOne({_id: req.params.id})
        const filename = response.image.split("/images")[1]
        fs.unlink (`images/${filename}`, () => {
            Shame
                .deleteOne({_id: req.params.id})
                .then(res.status(200).json({message: "Scandale effacé de la BDD"}))
                .catch((error) => res.status(404).json({error}))
        })

    }catch(error){
        res.status(500).json({error})
    }
};