const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

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
            res.status(200).json({"message": `successfully requested ${friendTarget.realname} to become a friend`});
        } else {
            return res.status(400).json({"message": "user is already a friend, has already been sent a friend request, or was not found"});
        }
    } catch (err) {
        return res.status(500).json({"message": "internal server error"});
    }
});

router.post("/accept", (req, res) => {
    // TODO: IMPLEMENT
});

module.exports = router;