const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.post("/request", async (req, res) => {
    if (!req.user){
        return res.status(401).json({"message": "you are not logged in"});
    }

    if (!req.body.id){
        return res.status(400).json({"message": "missing id"});
    }

    if (req.user._id == req.body.id) {
        return res.status(400).json({"message": "requesting to friend self"});
    }

    try {
        const eligibleUser = await userModel.findOne({
            _id: req.body.id,
            friendrequests: { $nin: [req.user._id] },
            friends: { $nin: [req.user._id] }
        });

        if (eligibleUser) {
            const friendTarget = await userModel.findByIdAndUpdate(
                req.body.id,
                { $push: { friendrequests: req.user._id } },
                { new: true }
             );
            return res.status(200).json({"message": `successfully requested ${friendTarget.realname} to become a friend`});
        } else {
            return res.status(400).json({"message": "user is already a friend, has already been sent a friend request, or was not found"});
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({"message": "internal server error"});
    }
});

router.post("/accept", async (req, res) => {
    if (!req.user){
        return res.status(401).json({"message": "you are not logged in"});
    }

    if (!req.body.id){
        return res.status(400).json({"message": "missing id"});
    }

    try {
        const acceptingUser = await userModel.findOne({
            _id: req.user._id,
            friendrequests: { $in: [new ObjectId(req.body.id)] }
        });

        if (acceptingUser) {
            const friendTarget = await userModel.findByIdAndUpdate(
                req.user._id,
                { $push: { friends: new ObjectId(req.body.id) }, $pull: { friendrequests: new ObjectId(req.body.id) } },
                { new: true }
            );

            await userModel.findByIdAndUpdate(
                req.body.id,
                { $push: { friends: req.user._id }},
                { new: true }
            );

            return res.status(200).json({"message": `successfully added ${friendTarget.realname} as a friend`});
        } else {
            return res.status(400).json({"message": "you never got a friend request from this person"});
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({"message": "internal server error"});
    }
});

module.exports = router;