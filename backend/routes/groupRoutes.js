const express = require("express");
const router = express.Router();
const eventModel = require("../models/eventModel");

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.post("/create", async (req, res) => {
    if (!req.user){
        return res.status(401).json({"message": "you are not logged in"});
    }

    if (!req.body.names){
        return res.status(400).json({"message": "missing group name"});
    }

    if (!Array.isArray(req.body.users) || !req.body.users.every(user => ObjectId.isValid(user))){
        return res.status(400).json({"message": "bad user list"});
    }

    if (!Array.isArray(req.body.groups) || !req.body.groups.every(group => ObjectId.isValid(group))){
        return res.status(400).json({"message": "bad group list"});
    }

    // TODO: validate user and group lists
    // TODO: further testing
    // TODO: add event ids to user objects and group objects

    try {

        await eventModel.create({
            title: req.body.title,
            description: (req.body.description || null),
            time: req.body.time,
            location: (req.body.location || null),
            creator: req.body.creator,
            users: req.body.users,
            groups: req.body.groups
        });

        return res.status(200).json({"message": `${req.body.creator} successfully created event ${req.body.title}`});

    } catch (err) {
        console.log(err);
        return res.status(500).json({"message": "internal server error"});
    }
});

module.exports = router;