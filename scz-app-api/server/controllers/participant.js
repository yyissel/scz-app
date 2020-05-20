const Participant = require("../models").Participant;

module.exports = {
  create(req, res) {
    console.log("REQUEST",req.body);
    return Participant.create({
      user_id: req.body.user_id,
      first_name: req.body.first_name,
      gender: req.body.gender,
      dob: req.body.dob,
      zip_code: req.body.zip_code,
      check_sleep: req.body.check_sleep,
			check_food: req.body.check_food,
			check_activity: req.body.check_activity,
			check_heart: req.body.check_heart,
			check_weight: req.body.check_weight,
			check_location: req.body.check_location,
			check_247: req.body.check_247,
			start_time: req.body.start_time,
			end_time: req.body.end_time
    })
      .then(participant =>
        res.status(201).send({
          success: true,
          message: "Successfully created an participant entity.",
          participant
        })
      )
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Participant.findAll()
      .then(participants => res.status(200).send(participants))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    // retrieve Participant by user_id
    return Participant.findOne({
      where: {
        user_id: req.params.user_id
      }
    })
  
      .then(participant => {
        if (!participant) {
          return res.status(404).send({
            message: "Participant Not Found"
          });
        }
        return res.status(200).send(participant);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    // Use findAll() with where to use our own specified ID
    console.log(req.body);
    return Participant.findOne({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(participant => {
      if (!participant) {
        return res.status(404).send({
          message: "Participant Not Found"
        });
      }
      return participant
        .update(req.body)
        .then(() => res.status(200).send(participant))
        .catch(error => {
          res.status(400).send(error);
        });
    })
    .catch(error => {
      error => res.status(400).send(error)
    });
  },

  delete(req, res) {
    return Participant.findByPk(req.params.participantId)
      .then(participant => {
        if (!participant) {
          return res.status(400).send({
            message: "Participant Not Found"
          });
        }
        return participant
          .destroy()
          .then(() =>
            res.status(200).send({ message: "Successfully deleted the participant!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};