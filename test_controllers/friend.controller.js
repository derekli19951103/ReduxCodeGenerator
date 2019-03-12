const express = require('express');
const router = express.Router();
const friendService = require('./friend.service');

// routes
router.post('/request', createFriendRequest);
router.put('/accept', acceptFriendRequest);
router.put('/ignore', ignoreFriendRequest);
router.get('/allfriend', getAllFriends);
router.get('/allrequest', getAllRequests);
router.get('/status', getStatus);


module.exports = router;

function createFriendRequest(req, res, next) {
    friendService.createFriendRequest(req.params.usernameA, req.params.usernameB)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function acceptFriendRequest(req, res, next ) {
    friendService.acceptFriendRequest(req.params.usernameB, req.params.usernameA)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function ignoreFriendRequest(req, res, next ) {
    friendService.ignoreFriendRequest(req.params.usernameB, req.params.usernameA)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAllFriends(req, res, next) {
    friendService.getAllFriends(req.params.usernameA)
    .then(friend => friend ? res.json(friend) : res.status(400).json( {message: "Get friend list failed."} ))
    .catch(err => next(err));
}

function getAllRequests(req, res, next) {
    friendService.getAllRequests(req.params.usernameA)
    .then(friend => friend ? res.json(friend) : res.status(400).json( {message: "Get request list failed."} ))
    .catch(err => next(err));
}

function getStatus(req, res, next) {
    friendService.getStatus(req.params.usernameA, req.params.usernameB)
    .then(friend => friend ? res.json(friend) : res.status(400).json( {message: "Get statsus failed."} ))
    .catch(err => next(err));
}
