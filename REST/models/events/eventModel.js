const Event = require('./eventSchema')

exports.saveEvent = (req, res) => {
    
    console.log(req)

    Event.create({
        user: req.userData.id,
        name: req.body.name,
        desc: req.body.desc,
        date: req.body.date
    })
    .then(data => {
        res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Your event is saved!',
            data
        })
    })
    .catch(err => {
        res.status(404).json(err)
    })
}



exports.findEvents = (req, res) => {

    Event.find({ user: req.userData.id}, (err, result) => {
      
      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Something went wrong',
          err
        })
      }
  
      if(!result) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'You have not saved any events',
          err
        })
      }
  
      res.status(200).json(result)
    })
    
  }



  exports.getEventById = (req, res) => {

    Event.exists({ _id: req.params.id }, (err, event) => {
  
      if(err) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request',
        })
      }
  
      if(!event) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'This event does not exist',
        })
      }
  
  
      Event.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message || 'Server error',
          })
        })
  
    })
  
  }