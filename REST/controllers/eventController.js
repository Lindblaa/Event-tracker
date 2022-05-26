const router = require('express').Router();
const eventModel = require('../models/events/eventModel')
const auth = require('../authentication/auth')

//Spara event
router.post('/', auth.verifyToken, eventModel.saveEvent)

//Hämta event
router.get('/', auth.verifyToken, eventModel.findEvents)

//Hämta specifikt event
router.get('/:id', eventModel.getEventById)

module.exports = router